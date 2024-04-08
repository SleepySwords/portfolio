---
title: Design is hard
date: 2024-01-14
---

# The app

The design of the Rust TUI app, `DoTodo`, should be fairly straightforward. You have tasks, configs and other things. It should not be that hard to design something like this, **RIGHT?**.

Well, it is fairly simple, with the exception of one things. Overlays. They can get quite painful. Unlike the rest of the app which remain quite static, overlays can be pushed onto the screen and removed off the screen at a moments notice. This incosistent nature along with Rust borrow checker can lead to a lot of pain.

# The problem

The problem mainly lies with the concept that you cannot remove the overlay while in a method of an overlay. For example, the following signature with the data structures is not allowed.

```rust
pub struct App {
    overlays: Vec<Overlay>,
    other: ImportThings
}

pub struct Overlay {
    overlay: Things
}

impl Overlay {
    pub fn key_event(&mut self, app: &mut App) {}
}
```

This in handsight, is fairly obvious. It is pretty clear that you are able to just remove the overlay from the `overlays` vec and that would definately cause some memory issues. So to combat this, there was a seperate `StackLayout` and the `App`. The `StackLayout` acted as a way to hold basically every widget, from `MainScreen` to every overlay.

This was pretty alright. It worked alright, but the question then became, how would you add or remove elements if the `MainScreen` was inaccesible from `key_event`. The answer that I thought at the time was callbacks. The callbacks were stored in `App` and were "flushed" and executed at the end of the event. This was fine to work with.

# Refactor

There was a refactor, mainly because this was a component based system, so a lot of the logic that did not really need to be spread out was in multiple different files. This made it much more harder to track where a certain input was handled. In an effort to combat this, an `elm` structure was put in place. This meant everything was in the `App`. The concept of a `StackLayout` was removed.

This resulted in access to overlays to be more like this

```rust
fn draw(app: &mut App) {
    if let Some(Overlay::Input(input)) = app.last() {
        // Stuff
    }
}
```

Notice how there is no reference to self. This is because of the issue described in [the problem](#The%20problem). This also as a result, does not allow for composable overlays. Since drawing, key and mouse inputs always fetch the overlays data from the last element of the `App` overlay vec. There is no way you would be able to draw or pass inputs to another overlay, as it fetched that data from someplace else. While this does not really an issue. I was bothered with it.

# Refactor 2

Based on the `Component` architecture laid out in the ratatui documentation. The third attempt consisted of inputs returning a `PostEvent` structure. This structure consisted of a `Action` enum which had things like `PopLayer` and `PushLayer`. This `Action` would then be returned to the main loop and be executed. This is very similar to the callbacks solution. Almost the exact same.

However, it retained the elements of the `elm` structure. Elements that should have been shared in the first place, such as the `tasklist` and `completed list` index which are also accessed by a viewer component are now stored in the `App`. It was previously passed around using `Rc<RefCell>` which was significantly more ugly. So that is a plus, I guess?

# Refactor 3 (hopefully the finale)

We have come full circle, going back to the approach found in the problem. Moving back to what is basically the `StackLayout`, but now it is called a `ScreenManager`. It still contains remenents from the past refactors. For example, `PostEvent`'s is still the way to communicate to the `ScreenManager` to push or pop a certain overlay.

I also kept the centralising of data and input, there is still no `Rc<RefCell` to be found in this application. Thankfully, we were rid of the `Overlay` enum that basically needed to be added to when adding a new overlay type. Now we just use a `Box<dyn Component>` to allow for more flexibility. While I'm still not sure what will happen with the whole `PostEvent` situation (these can be easily lost), I'm know very happy with the overall design of this App. And it only took 3 rewrites...

# Full circle

~~I've come to start thinking if I've just come full circle. With every iteration, it seems more and more meaningless to worry about how the `Overlays` are actually implemented and to just focus on adding new features. It might be better to not always just overengineer things and really only consider refactoring when an issue occurs.~~

I have kind off changed my mind, I feel like these refactors are good, even if we do come full circle. I have definately learnt a lot more about how to better structure things.

While this obviosuly comes with the caveat that it is much harder to refactor thing the larger a project grows, I still think it was worth it. Let's just chug along and make cool stuff! In the end _design is hard_.
