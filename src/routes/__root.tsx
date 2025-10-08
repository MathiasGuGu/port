import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";

import Header from "../components/Header";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/useTheme";
import { useLayoutEffect, useState } from "react";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "_🏎️______________________",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

const startFrames = [
  "_🏎️______________________",
  "__🏎️______________________",
  "___🏎️______________________",
  "____🏎️______________________",
  "_____🏎️______________________",
  "______🏎️______________________",
  "_______🏎️______________________",
  "________🏎️______________________",
  "_________🏎️______________________",
  "__________🏎️______________________",
  "__________🏎️______|_______________",
  "__________🏎️_____|_______________",
  "__________🏎️____|_______________",
  "__________🏎️___|_______________",
  "__________🏎️__|_______________",
  "__________🏎️_|_______________",
  "__________🏎️|_______________",
  "__________🏎️_______________",
  "_________|🏎️_______________",
];

const idleFrames = [
  "________|_🏎️_________________",
  "_______|__🏎️_________________",
  "______|___🏎️_________________",
  "_____|____🏎️_________________",
  "____|_____🏎️_________________",
  "___|______🏎️_________________",
  "__|_______🏎️_________________",
  "_|________🏎️_________________",
  "|_________🏎️__________________",
  "__________🏎️___________|_____",
  "__________🏎️__________|______",
  "__________🏎️_________|_______",
  "__________🏎️________|________",
  "__________🏎️_______|_________",
  "__________🏎️______|__________",
  "__________🏎️_____|___________",
  "__________🏎️____|____________",
  "__________🏎️___|_____________",
  "__________🏎️__|______________",
  "__________🏎️_|_______________",
  "__________🏎️|________________",
  "__________🏎️_________________",
  "_________|🏎️_________________",
];

function RootDocument({ children }: { children: React.ReactNode }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isStartFrames, setIsStartFrames] = useState(true);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(currentFrame + 1);
      if (currentFrame === startFrames.length - 1) {
        setIsStartFrames(false);
        setCurrentFrame(0);
      }

      document.title = `${
        isStartFrames
          ? startFrames[currentFrame % startFrames.length]
          : idleFrames[currentFrame % idleFrames.length]
      } - mathiasgumpen.com`;
    }, 200);
    return () => clearInterval(interval);
  }, [currentFrame]);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          {/* <TanstackDevtools
            config={{
              position: "bottom-left",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          /> */}
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
