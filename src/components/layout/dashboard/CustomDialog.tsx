import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
