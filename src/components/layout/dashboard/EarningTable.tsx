import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableData } from "@/constants";

export function EarningTable() {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data) => (
          <TableRow key={data.id}>
            <TableCell className=" py-3">{data.date}</TableCell>
            <TableCell>{data.method}</TableCell>
            <TableCell>{data.amount}</TableCell>
            <TableCell className="text-right">
              {data.status === "Completed" ? (
                <span className="text-green-500">{data.status}</span>
              ) : data.status === "Pending" ? (
                <span className="text-yellow-500">{data.status}</span>
              ) : (
                <span className="text-red-600">{data.status}</span>
              )}
            </TableCell>
            <TableCell>
              {" "}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`font-bold text-lg outline-none  ${
                    data.status === "Pending"
                      ? "text-gray-600 cursor-pointer"
                      : "text-gray-200 cursor-not-allowed"
                  } dark:text-gray-200`}
                >
                  <h1>•••</h1>
                </DropdownMenuTrigger>
                {data.status === "Pending" && (
                  <DropdownMenuContent>
                    <DropdownMenuItem>Cancel Withdraw</DropdownMenuItem>
                  </DropdownMenuContent>
                )}
             
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
