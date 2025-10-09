import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const ProjectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
          <Button
            size="lg"
            variant={"secondary"}
            className="w-full shadow-inner sm:w-auto bg-gradient-to-tr from-card-dark to-background-light/20 border border-border"
          >
            <ExternalLink />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
