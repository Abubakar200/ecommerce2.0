import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import toast from "react-hot-toast";

interface CellActionProps {
    data: BillboardColumn
}


const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Billboard Id copied to clipboard");
      };
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="p-0 w-8 h-8">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onCopy(data.id)}>
                    <Copy className="mr-2 h-4 w-4"/>
                    Copy Id
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4"/>
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Trash className="mr-2 h-4 w-4"/>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default CellAction;