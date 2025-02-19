import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CustomDialog({
  title, 
  // label,
  children,
  open,
  onOpenChange
}: {
  title?: string;
  // label: string;
  children: React.ReactNode;
  // btnName: string;
  type: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
    
          <div className="w-full">
        
            {children}
          </div>
   
      </DialogContent>
    </Dialog>
  );
}
