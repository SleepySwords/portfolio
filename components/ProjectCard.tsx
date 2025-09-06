import { Project } from "@/app/projects";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import Link from "next/link";

function backgroundAndBorder() {
  return "hover:border-(--projectBorder) hover:bg-(--projectBackground)";
}

export function ProjectCard({ item }: { item: Project }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="mt-4 h-28 overflow-hidden hover:overflow-visible"
    >
      <div
        className={`cards group rounded-lg border border-transparent px-5 py-4 transition-colors transition-transform hover:scale-110 ${backgroundAndBorder()}`}
      >
        <div className={`mt-0 mb-3.5 flex items-center justify-between`}>
          <h2 className={`m-0 text-xl font-semibold underline`}>
            <Link href={`projects/${item.id}`}>
              {item.title}{" "}
              <span className="inline-block group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          </h2>
          <RxDragHandleDots2
            className={`hidden cursor-grab sm:inline`}
            color="gray"
            {...listeners}
            {...attributes}
          />
        </div>
        <p className={`m-0 h-12 max-w-[30ch] text-sm opacity-50`}>
          {item.briefDescription}
        </p>
        <div className="font-semibold">Skills</div>
        <div className={`mt-2 flex`}>
          {item.tools.map((icon, i) => (
            <Link key={i} className={`${icon.id} mr-2`} href={icon.link}>
              <div
                className="icon transition-none"
                style={{ transformOrigin: "bottom center" }}
              >
                {icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
