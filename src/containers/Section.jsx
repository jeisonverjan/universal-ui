function Section({ id, title, children }) {
  return (
    <section id={id} className="w-full h-auto space-y-4 sm:space-y-8 mb-8">
      <h2 className="font-primary text-3xl tracking-wide sm:text-4xl md:text-5xl text-bg-dark">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
