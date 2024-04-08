const Tagline = ({ text }: { text: string }) => {
  return (
    <p className="inline-flex border px-4 py-1 rounded-full text-[14px]">
      {text}
    </p>
  );
};

export default Tagline;
