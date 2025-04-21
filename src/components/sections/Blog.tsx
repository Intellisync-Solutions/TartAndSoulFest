import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

// Local image imports - commented out until images are available
// import soulFoodSunday from '../../assets/images/soul-food-sunday.jpeg';
// import butterTartsHistory from '../../assets/images/butter-tarts-history.jpeg';
// import localArtists from '../../assets/images/local-artists.jpeg';

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
};

const recentPosts: BlogPost[] = [
  {
    title: "Soul Food Sunday: A Community Celebration",
    date: "March 10, 2024",
    excerpt: "Last weekend's Soul Food Sunday brought together over 200 community members for an afternoon of delicious food, soulful music, and unforgettable memories.",
    image: "placeholder-blog-image", // Placeholder until image is available
    slug: "soul-food-sunday-celebration"
  },
  {
    title: "The History of Butter Tarts in Black Canadian Culture",
    date: "March 5, 2024",
    excerpt: "Exploring the rich history and cultural significance of butter tarts in Canadian Black communities, particularly in Chatham-Kent.",
    image: "placeholder-blog-image", // Placeholder until image is available
    slug: "butter-tarts-history"
  },
  {
    title: "Local Artists Spotlight: March Edition",
    date: "March 1, 2024",
    excerpt: "Meet the talented local artists who will be performing at our upcoming Spring Soul Sessions series.",
    image: "placeholder-blog-image", // Placeholder until image is available
    slug: "local-artists-spotlight-march"
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#2E1F1F] rounded-lg overflow-hidden card-hover"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-300 mb-3">
        <Calendar size={16} className="mr-2" />
        <span>{post.date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <motion.button
        whileHover={{ x: 5 }}
       className="flex items-center text-[#00A89F] font-semibold"
      >
        Read More <ArrowRight size={16} className="ml-2" />
      </motion.button>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <section className="py-20 bg-[#3A2C2C] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with stories from our community, event recaps, and cultural insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="btn-secondary">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;