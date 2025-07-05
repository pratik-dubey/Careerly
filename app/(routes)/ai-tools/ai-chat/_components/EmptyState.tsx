const questionList = [
  "What skills do I need to become Data Scientist ?",
  "Explain Recursion and Backtracking with illustrations.",
];

type EmptyStateProps = {
  selectedQuestion: (question: string) => void;
};

export default function EmptyState({ selectedQuestion }: EmptyStateProps) {
  return (
    <div>
      <h2 className="font-bold text-xl text-center">
        Ask anything to Careerly AI
      </h2>
      <div>
        {questionList.map((question, index) => (
          <h2
            className="p-4 border rounded-lg text-center my-3 hover:border-primary cursor-pointer"
            key={index}
            onClick={() => selectedQuestion(question)}
          >
            {question}
          </h2>
        ))}
      </div>
    </div>
  );
}
