export default function CareTips() {
  return (
    <section className="bg-[#faf8f2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#2f2f2f] mb-16">
          Here's How It <span className="italic">Works</span>
        </h2>

        {/* Steps Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-3">
              <i className="lni lni-leaf-1 text-[#1f3a2e]" style={{ fontSize: '52px' }}></i>
            </div>
            <p className="text-lg text-[#2f2f2f] font-serif">Pick your plant</p>
          </div>

          {/* Arrow */}
          <i className="lni lni-angle-double-right" style={{ fontSize: '48px' }}></i>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-3">
              <i className="lni lni-glass-juice-1 text-[#1f3a2e]" style={{ fontSize: '52px' }}></i>
            </div>
            <p className="text-lg text-[#2f2f2f] font-serif">Choose a pot color</p>
          </div>

          <i className="lni lni-angle-double-right" style={{ fontSize: '48px' }}></i>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-3">
              <i className="lni lni-box-archive-1 text-[#1f3a2e]" style={{ fontSize: '52px' }}></i>
            </div>
            <p className="text-lg text-[#2f2f2f] font-serif">Have it shipped</p>
          </div>

          <i className="lni lni-angle-double-right" style={{ fontSize: '48px' }}></i>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-3">
              <i className="lni lni-leaf-6 text-[#1f3a2e]" style={{ fontSize: '52px' }}></i>
            </div>
            <p className="text-lg text-[#2f2f2f] font-serif">Watch it grow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
