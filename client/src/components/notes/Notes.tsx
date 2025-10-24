import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, StickyNote, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NoteModal from "@/components/modals/note-modal";
import Heading from "@/components/ui/heading";
import ToolTipBox from "@/components/ui/tool-tip-box";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

import NoteItem from "./Noteitem";

const Notes = () => {

  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, fetchNotes } = context;
  const [open, setOpen] = useState(false)
  const [modalProps, setModalProps] = useState<Note | null>(null)

  const openModal = (data: Note | null) => {
    // console.log(data);
    setModalProps(data)
    setOpen(true)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

      <div className="container">
        <div className="flex items-center justify-between mt-10 mb-4">
          <Heading title="MiniNote" description="Your notes on the cloud" />
          <Button 
            onClick={() => openModal(null)} 
            size="sm" 
            className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add a Note
          </Button>
          <ToolTipBox tip="Create a note">
            <Button 
              onClick={() => openModal(null)} 
              size="icon" 
              className="rounded-full sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus />
            </Button>
          </ToolTipBox>
        </div>
        <Separator />

        <div className="my-10">
          {notes === null ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <h5 className="text-lg font-medium text-muted-foreground">Loading your notes...</h5>
            </div>
          ) : notes.length < 1 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-6">
                <StickyNote className="h-24 w-24 text-muted-foreground/50" />
                <Sparkles className="h-8 w-8 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
              </div>
              <h4 className="mb-3 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to create your first note?
              </h4>
              <p className="text-lg text-muted-foreground mb-6 max-w-md">
                Start organizing your thoughts and ideas. Your notes will appear here once you create them.
              </p>
              <Button 
                onClick={() => openModal(null)} 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Note
              </Button>
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-[masonary] grid-flow-dense">
            {notes && notes.map((note) => {
              return (
                <div key={note?._id}>
                  <NoteItem note={note} updateNote={() => openModal(note)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;