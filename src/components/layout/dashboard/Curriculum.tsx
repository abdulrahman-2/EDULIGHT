import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LecDialog from "./Dialogs/LecDialog";
import AttachDialog from "./Dialogs/AttachDialog";
import { Button } from "@/components/ui/button";
import EditSecDialog from "./Dialogs/EditSecDialog";
import EditLecDialog from "./Dialogs/EditLecDialog";

const Curriculum = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Section 01",
      lectures: [
        { id: 1, title: "Lecture 1" },
        { id: 2, title: "Lecture 2" },
      ],
    },
  ]);

  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  const handleDropdownOpen = (index: number, open: boolean) => {
    setOpenStates((prev) => ({ ...prev, [index]: open }));
  };

  const addSection = () => {
    setSections((prevSections) => [
      ...prevSections,
      {
        id: Date.now(),
        name: `Section ${String(prevSections.length + 1).padStart(2, "0")}`,
        lectures: [],
      },
    ]);
  };

  const addLec = (lecId: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === lecId
          ? {
              ...section,
              lectures: [...section.lectures, { id: Date.now(), title: `Lecture ${section.lectures.length + 1}` },],
            }
          : section
      )
    );
  };
 const deleteSection = (sectionId: number) => {
  setSections((prevSections) => {
    const updatedSections = prevSections.filter((section) => section.id !== sectionId);

    // Renumber the sections
    return updatedSections.map((section, index) => ({
      ...section,
      name: `Section ${String(index + 1).padStart(2, "0")}`, // Ensure sequential numbering
    }));
  });
};


  const deleteLecture = (sectionId: number, lectureId: number) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, lectures: section.lectures.filter(lecture => lecture.id !== lectureId) }
          : section
      )
    );
  };
  return (
    <div className="mt-5">
      <h1 className="text-xl md:text-3xl font-semibold">Course Curriculum</h1>
      <div className="mt-5 bg-primary/10 p-6 rounded-lg">
        {sections.map((section) => (
          <div key={section.id} className="mb-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <RxHamburgerMenu className="text-2xl text-gray-600" />
                <h4 className="text-lg">{section.name}:</h4>
                <span className="text-gray-600">Section Name</span>
              </div>
              <div className="flex items-center space-x-5 cursor-pointer text-gray-400 text-lg">
                <AiOutlinePlus className="hover:text-primary duration-150" onClick={() => addLec(section.id)} />
                  <button onClick={(e) => e.preventDefault()}>

                <EditSecDialog />
                  </button>
                <GoTrash className="hover:text-red-500 duration-150" onClick={() => deleteSection(section.id)} />
              </div>
            </div>

            {section.lectures.map((lecture) => (
              <div key={lecture.id} className="mt-5 bg-white p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RxHamburgerMenu className="text-xl text-gray-600" />
                    <h4>{lecture.title}</h4>
                  </div>
                  <div className="flex items-center space-x-5 cursor-pointer">
                    <DropdownMenu
                      onOpenChange={(open) =>
                        handleDropdownOpen(lecture.id, open)
                      }
                    >
                      <DropdownMenuTrigger className="outline-none">
                        <div className="flex items-center font-semibold bg-[#FFEEE8] px-4 py-2 rounded-lg space-x-1 text-primary">
                          <h4>Contents</h4>
                          {openStates[lecture.id] ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <LecDialog />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <AttachDialog />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex items-center space-x-5 cursor-pointer text-gray-400 text-lg">
                      <button onClick={(e) => e.preventDefault()}><EditLecDialog/></button>
                      <GoTrash className="hover:text-red-500 duration-150" onClick={() => deleteLecture(section.id, lecture.id)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button
        className="w-full bg-[#FFEEE8] text-primary py-6 shadow-none hover:bg-[rgb(255,238,232,0.8)] text-lg md:text-xl mt-5"
        onClick={addSection}
      >
        Add Section
      </Button>
    </div>
  );
};

export default Curriculum;