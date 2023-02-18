import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const POSTS = [
  { id: "post-1", title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

function App() {
  const queryClient = useQueryClient();

  const throwError = false;

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      throwError
        ? Promise.reject("Error message")
        : wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });

  if (postQuery.isLoading) return <p>Loading...</p>;

  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

  return (
    <div className="flex flex-col gap-2">
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        className="flex-none rounded-md border bg-gray-500 px-4 py-2 text-white disabled:bg-gray-400"
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New Post
      </button>
    </div>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
