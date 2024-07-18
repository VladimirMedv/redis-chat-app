import { useEffect } from "react";
import ChatBottomBar from "./ChatBottomBar";
import ChatTopBar from "./ChatTopBar";
import MessageList from "./MessageList";
import { useSelectedUser } from "@/store/useSelectedUser";

export default function MessageContainer() {
  const { setSelectedUser } = useSelectedUser();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedUser(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [setSelectedUser]);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopBar />

      <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
        <MessageList />
        <ChatBottomBar />
      </div>
    </div>
  );
}
