import SignOutButton from "@/components/signOutButton";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Props = {
  name: string;
}

export default function UserIcon({ name }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button">
          {name}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[180px] p-0">
        <ul>
          <li className="p-3">
            <SignOutButton />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
