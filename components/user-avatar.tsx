import { Avatar } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar>
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
