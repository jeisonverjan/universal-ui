function Section({ id, children }) {
  return (
    <section
      id={id}
      className="shadow-2xl rounded-3xl p-4 w-full flex items-center justify-center"
    >
      {children}
    </section>
  );
}

export default Section;
