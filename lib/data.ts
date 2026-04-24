import { Link, ProjectInfo} from './type'


export const links: Link[] = [
    {
        nameEng: "Home",
        hash: "#home"
    },
    {
        nameEng: "About",
        hash: "#about"
    },
    {
        nameEng: "Projects",
        hash: "#projects"
    },
    {
        nameEng: "Get In Touch",
        hash: "#connect"
    },
    
];

export const projectsData: ProjectInfo[] = [
    {
    title: "Machine Learning Specialization by Andrew Ng",
    description: "",
    tags: ["Certifications"],
    imageUrl: "/machine_learning.png",
    link: "https://coursera.org/share/f9bcd7be95aaf6073d4f5f798f63d523"
    },
    {
    title: "Deep Learning Specialization by Andrew Ng",
    description: "",
    tags: ["Certifications"],
    imageUrl: "/Deep_learning.png",
    link: "https://coursera.org/share/4cdb2ab9b6238c3ac01e0b9308ee2b6d"
    },
    {
    title: "Google Data Analytics Professional Certificate",
    description: "",
    tags: ["Certifications"],
    imageUrl: "/data_analytics.png",
    link: "https://coursera.org/share/c77a904040320faad7d8dbc4edbfe968"
    },
    {
    title: "Introduction to TensorFlow",
    description: "",
    tags: ["Certifications"],
    imageUrl: "/tensorflow.png",
    link: "https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"
    },
    {
  title: "Sentiment Analysis using BERT – NLP Classification System",
  description: "Built an end-to-end sentiment analysis system using a fine-tuned BERT transformer model for binary text classification. Trained the model on IMDb review data to classify user sentiment as positive or negative with confidence scoring. Developed a modular FastAPI backend with REST APIs, single-text prediction, bulk file upload analysis (CSV, JSON, TXT), interactive frontend rendering, and analytics visualization for sentiment distribution.",
  tags: ["nlp", "bert", "transformers", "sentiment analysis", "text classification", "fastapi", "python", "machine learning", "deep learning", "pytorch"],
  imageUrl: "/sentiment-analysis.png",
  link: "https://github.com/noumanhafeez/sentiment-analysis-bert"
},
    {
  title: "PDF Chat Assistant – Retrieval-Augmented Generation (RAG) System",
  description: "Built an end-to-end Retrieval-Augmented Generation (RAG) system that enables users to upload PDF documents and interact with them via a conversational AI interface. Implemented text extraction, semantic chunking, and embedding-based retrieval to enable context-aware question answering. Integrated a vector search engine for efficient document retrieval and developed a modular FastAPI backend with structured logging and a service-oriented architecture.",
  tags: ["nlp", "rag", "information retrieval", "vector database", "semantic search", "fastapi", "python", "machine learning", "mlops"],
  imageUrl: "/rag-project.png",
  link: "https://github.com/noumanhafeez/pdf-chat-assistant"
},
    {
    title: "Production MLOps Pipeline for CNN ",
    description: "End-to-end MLOps pipeline for training, deploying, and monitoring CNN models in production with configurable YAML settings, using MLflow, Docker, and FastAPI.",
    tags: ["mlops", "deep learning", "mlflow", "configuration", "CI/CD", "docker", "FASTAPI"],
    imageUrl: "/coursera.png",
    link: "https://github.com/noumanhafeez/production-cnn-mlops-pipeline"
    },
    {
    title: "Production MLOps Pipeline for House Prices",
    description: "End-to-end MLOps pipeline for predicting house prices, with configurable YAML-based settings, model training, deployment, and monitoring using MLflow, Docker, and Flask.",
    tags: ["mlops", "machine learning", "mlflow", "configuration", "CI/CD", "docker", "FLASK"],
    imageUrl: "/coursera.png",
    link: "https://github.com/noumanhafeez/production-ml-pipeline-house-prices"
    },
    {
    "title": "N-gram Language Model & Sentence Generator (School Assignment)",
    "description": "Implemented a trigram-based language model for next-word prediction, sentence generation, and perplexity computation using unigrams, bigrams, and trigrams. Designed for Project Gutenberg text files with an interactive pipeline for predictions and sentence generation.",
    "tags": ["mlops", "nlp", "language modeling", "text generation", "perplexity", "data science", "python"],
    "imageUrl": "/ngram.png",
    "link": "https://github.com/noumanhafeez/ml-ds-assignment-2"
    },
    {
    "title": "Decision Trees & Linear Regression from Scratch (School Assignment)",
    "description": "Developed production-grade implementations of Decision Tree (classification/regression) and Linear Regression models using only NumPy, without scikit-learn dependencies. Featured modular architecture with dedicated modules for each algorithm, comprehensive logging in standard format (e.g., JSON-structured logs for training metrics, errors), and evaluation metrics like MSE, accuracy, and feature importance visualization.",
    "tags": ["machine-learning", "algorithms", "numpy", "decision-trees", "linear-regression", "from-scratch", "mlops", "python", "data-science"],
    "imageUrl": "/scratch-ml.png",
    "link": "https://github.com/noumanhafeez/scratch-ml-core"
}
]



