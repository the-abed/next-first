import Link from "next/link";

export default function StoryCard({ story }) {
  const shortStory =
    story.story.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 mb-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
      
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={story.image}
          alt={story.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />

        <div>
          <h2 className="font-bold text-lg text-gray-800">
            {story.name}
          </h2>
          <p className="text-sm text-gray-500">
            {story.designation}
          </p>
          <p className="text-sm font-medium text-indigo-600">
            {story.company}
          </p>
        </div>
      </div>

      {/* Story Preview */}
      <p className="mt-5 text-gray-700 text-sm leading-relaxed">
        {shortStory}
      </p>

      {/* Button */}
      <Link
        href={`/stories/${story.id}`}
        className="inline-block mt-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
      >
        Read Full Story →
      </Link>
    </div>
  );
}
