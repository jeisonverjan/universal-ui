function Gallery({ children }) {
  return (
    <div className="grid gap-4 auto-rows-[25rem] lg:auto-rows-[40rem] lg:grid-cols-[repeat(auto-fill,minmax(35rem,1fr))]">
      {children}
    </div>
  );
}

export default Gallery;

//grid gap-4 auto-rows-[40rem] grid-cols-[repeat(auto-fill,minmax(35rem,1fr))]
