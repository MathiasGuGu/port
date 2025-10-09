import BlogItem from "./blog-item";

const mockPosts = [
  {
    slug: "react-hooks-forklart",
    title: "Alle Hooks fra React, kort forklart.",
    description:
      "En gjennomgang av alle de innebygde React Hooks, hva de gjør og når du bør bruke dem.",
    date: "10. Juni 2024",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    slug: "react-19-2-hva-er-nytt",
    title: "React 19.2, hva er nytt og hva jeg gleder meg til.",
    description:
      "En gjennomgang av de nye funksjonene i React 19.2 og mine tanker om fremtiden til React.",
    date: "10. Juni 2024",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    slug: "react-19-2-hva-er-nytt",
    title: "React 19.2, hva er nytt og hva jeg gleder meg til.",
    description:
      "En gjennomgang av de nye funksjonene i React 19.2 og mine tanker om fremtiden til React.",
    date: "10. Juni 2024",
    tags: ["React", "JavaScript", "Frontend"],
  },
];

const BlogList = () => {
  return (
    <div className="flex flex-col gap-2">
      {mockPosts.map((post) => {
        return <BlogItem post={post}></BlogItem>;
      })}
    </div>
  );
};

export default BlogList;
