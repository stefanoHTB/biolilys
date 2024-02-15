export interface Blog {
    id: string;
    category: string;
    author?: string;
    title: string;
    description: string;
    date: string;
    smallTopic: string;
    readTime: string;
    imageSrc: string;
    paragraphs: {
      image?: string;
      content: string;
    }[];
  };
  