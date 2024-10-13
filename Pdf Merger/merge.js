// pdf merger npm function

const mergePDFs = async (p1, p2) => {
  // Dynamically import the ES module using import()
  const PDFMerger = (await import('pdf-merger-js')).default;
         
  const merger = new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  // Set metadata
  await merger.setMetadata({
      producer: "pdf-merger-js based script",
      author: "Sohel Shaikh",
      creator: "Sohel Shaikh",
      title: "Merged Pdf"
  });

  let d = new Date().getTime();
  await merger.save(`./public/pdf${d}.pdf`); // Save under the given name and reset the internal document
  return d;
};

module.exports = { mergePDFs };
