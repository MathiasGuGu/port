import { Card, CardContent, CardHeader } from "../ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

// const Seperator = () => {
//   return (
//     <div className="w-full h-px my-8 grid grid-cols-[1fr_70px_1fr] items-center gap-2">
//       <span className="w-full h-px bg-muted-foreground/20"></span>
//       <span className="flex items-center justify-center text-xs text-muted-foreground uppercase">
//         Eller
//       </span>
//       <span className="w-full h-px bg-muted-foreground/20"></span>
//     </div>
//   );
// };

const Contact = () => {
  const { isCopied, copy } = useCopyToClipboard();
  return (
    <div className="w-full max-w-4xl flex flex-col gap-4 items-start justify-start">
      <h3 className="text-2xl text-foreground">Ta kontakt</h3>
      <p className="text-muted-foreground">
        Gjerne ta kontakt med meg om det er noe du lurer på, vil ta en prat,
        eller noe annet.
      </p>
      <div className=" w-full">
        <div>
          <div className="w-full text-muted-foreground rounded-lg h-auto shadow-inner bg-gradient-to-tr from-card-dark from-50% to-background/40 border border-border">
            <InputGroup className="h-12">
              <InputGroupInput
                className="placeholder:text-base"
                placeholder="mathias.gumpen.gundersen@gmail.com"
                readOnly
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  aria-label="Copy"
                  title="Copy"
                  size="icon-sm"
                  onClick={() => {
                    copy("mathias.gumpen.gundersen@gmail.com");
                  }}
                >
                  {isCopied ? <Check /> : <Copy />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        {/* <Seperator /> */}
      </div>
    </div>
  );
};

export default Contact;
