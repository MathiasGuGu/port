import { Button } from "../ui/button";

const LinkedinLinkButton = () => {
  return (
    <div className="bg-gradient-to-tr from-card-dark to-background-light p-[2px] rounded-lg">
      <Button
        asChild
        size="lg"
        variant={"secondary"}
        className="w-full sm:w-auto shadow-inner bg-gradient-to-tr from-card-dark to-background-light/20 border border-border"
      >
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://linkedin.com/in/mathiasgumpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin-icon lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </Button>
    </div>
  );
};

export default LinkedinLinkButton;
