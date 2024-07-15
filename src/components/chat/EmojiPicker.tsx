"use client";

import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onChange: (emoji: string) => void;
}

export default function EmojiPicker({ onChange }: EmojiPickerProps) {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Picker
          emojiSize={18}
          data={data}
          maxFequentRows={1}
          theme={theme}
          onEmojiSelect={(emoji: any) => {
            onChange(emoji.native);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
