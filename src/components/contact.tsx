import { Card, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest music, shows, and behind-the-scenes content.
          </p>
        </div>

        {/* Replace the grid with a simplified card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8 text-center">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
              <Icon icon="lucide:share-2" className="text-primary" />
              Follow Us
            </h3>
            
            <div className="flex justify-center gap-6">
              <Button 
                as="a"
                href="https://www.instagram.com/garduxlive/"
                target="_blank"
                rel="noopener noreferrer"
                variant="flat"
                size="lg"
                className="flex-col gap-2 h-auto py-4 px-6 hover:bg-default-100"
              >
                <Icon icon="logos:instagram-icon" className="text-3xl text-foreground/80" />
                <span className="text-foreground/70 text-sm">Instagram</span>
              </Button>
              
              <Button 
                as="a"
                href="https://www.youtube.com/@garduxlive"
                target="_blank"
                rel="noopener noreferrer"
                variant="flat"
                size="lg"
                className="flex-col gap-2 h-auto py-4 px-6 hover:bg-default-100"
              >
                <Icon icon="logos:youtube-icon" className="text-3xl text-foreground/80" />
                <span className="text-foreground/70 text-sm">YouTube</span>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};