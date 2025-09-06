"use client";

import { useEffect, useRef, useState } from "react";
import { createTimeline } from "animejs";
import { Tooltip } from "react-tooltip";
import { TOOLS, PROJECTS, Project } from "@/app/projects";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Project[]>(PROJECTS);
  const [activeId, setActiveId] = useState<Project | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    const timeline = createTimeline({
      loop: true,
    });
    timeline
      .add(".icon", {
        scaleX: [1, 1.3],
        scaleY: [1, 0.7],
        easing: "easeInOutQuad",
        duration: 250,
      })
      .add(".icon", {
        translateY: [0, -6],
        scaleX: [1.3, 0.9],
        scaleY: [0.7, 1.1],
        easing: "easeInOutQuad",
        duration: 250,
      })
      .add(".icon", {
        translateY: [-6, 0],
        scaleX: [0.9, 1],
        scaleY: [1.1, 1],
        easing: "easeInOutQuad",
        duration: 250,
      });
  });

  function handleDragStart(event: DragStartEvent) {
    const activeItem = items.find((o) => o.id == event.active.id);
    if (activeItem) {
      setActiveId(activeItem);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((o) => o.id == active.id);
        const newIndex = items.findIndex((o) => o.id == over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  return (
    <main className="flex flex-col items-center p-8">
      <div className="place-items-start text-3xl font-bold text-(--secondary)">
        The fun stuff!
      </div>
      {/*<SkewedBackground />*/}
      {Object.entries(TOOLS).map((value) => {
        const [id, tool] = value;
        return (
          <Tooltip
            anchorSelect={`.${tool.id}`}
            place="top"
            offset={20}
            key={id}
            style={{ zIndex: 10, backgroundColor: "#333333", width: "24rem" }}
          >
            <div className="font-bold">{tool.name}</div>
            <div>{tool.description}</div>
          </Tooltip>
        );
      })}
      <div
        ref={projectRef}
        className="mt-10 grid text-left sm:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3"
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items.map((f) => f.id)}
            strategy={rectSortingStrategy}
          >
            {items.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </SortableContext>

          <DragOverlay>
            {activeId ? (
              <ProjectCard key={activeId.id} item={activeId} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </main>
  );
}
