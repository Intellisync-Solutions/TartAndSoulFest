import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "People's Choice Award",
      description: "Voted by festival attendees, this award celebrates the butter tart that captures the hearts and taste buds of the people. The winner is determined by the highest number of votes from our valued festival-goers.",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      image: "/award-placeholder-1.jpg"
    },
    {
      id: 2,
      title: "Judge's Choice Award",
      description: "Selected by our esteemed panel of culinary experts, this award recognizes exceptional craftsmanship, creativity, and adherence to traditional butter tart excellence. Judges evaluate based on taste, texture, and presentation.",
      icon: <Award className="w-8 h-8 text-gray-300" />,
      image: "/award-placeholder-2.jpg"
    },
    {
      id: 3,
      title: "Yummy & Unique Award",
      description: "Celebrating innovation in butter tart creation, this award goes to the most unique and deliciously creative variation. Whether it's an unexpected ingredient or a twist on tradition, this tart stands out from the rest.",
      icon: <Star className="w-8 h-8 text-amber-500" />,
      image: "/award-placeholder-3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-[#2E1F1F] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-tart-mint">Butter Tart</span> Awards
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Celebrate excellence in butter tart craftsmanship with our prestigious awards program.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: award.id * 0.1 }}
              className="bg-[#3A2C2C] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <div className="text-4xl">{award.icon}</div>
                {/* Replace with actual image when available */}
                {/* <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-gray-300">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
