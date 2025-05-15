import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Real-World Gemba Success Stories</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 mb-8">
            Here are 10 real-world and illustrative Gemba use cases from manufacturing, process
            optimization, and supply chain management, demonstrating how Gemba walks drive tangible
            improvements.
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mt-12 mb-6">Manufacturing Use Cases</h2>
          
          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Assembly Line Setup Time Reduction</h3>
          <p className="mb-6">
            A manufacturer used Gemba walks to observe the assembly line setup process, identifying
            unnecessary steps and inefficiencies. By streamlining the workflow, setup time was reduced
            from 30 minutes to 20 minutes—a 33% improvement.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Cycle Time and Defect Rate Reduction in Electronics Assembly</h3>
          <p className="mb-6">
            An electronics plant faced long cycle times (45 minutes) and high defect rates (10%).
            Gemba walks uncovered root causes, leading to process changes that cut cycle time to 30
            minutes and halved the defect rate to 5%.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Identifying Hidden Factory Issues</h3>
          <p className="mb-6">
            In a molding plant, a broken mold pin led operators to manually correct defective parts—a
            workaround that failed when the regular operator was absent, resulting in defective
            shipments. A Gemba walk would have revealed this informal process, enabling corrective
            action before costly errors occurred.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Pinpointing Poka Yoke Flaws</h3>
          <p className="mb-6">
            A pin dispensing machine in an assembly line was intended to prevent missing parts, but
            poor tray design caused pins to fall to the floor, undermining the system. Gemba walks
            identified this flaw, prompting a redesign for true error-proofing.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Reducing Downtime with Digital Gemba Walks</h3>
          <p className="mb-6">
            An automotive supplier implemented digital Gemba walks with real-time data to proactively
            address unplanned machine downtime, shifting from reactive to proactive problem-solving
            and improving overall productivity.
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mt-12 mb-6">Process Optimization Use Cases</h2>
          
          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Improving Operator Engagement</h3>
          <p className="mb-6">
            A food processing company replaced a paper-based suggestion system with a mobile
            digital Gemba walk platform, enabling operators to easily report inefficiencies and process
            deviations. This increased engagement and accelerated process improvements.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Quality Control Enhancements</h3>
          <p className="mb-6">
            Managers conducting Gemba walks on the production line observed quality issues firsthand,
            enabling rapid identification and resolution of defects, leading to better product quality.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Safety Improvements</h3>
          <p className="mb-6">
            Gemba walks focused on workplace safety allowed managers to spot hazards and
            collaborate with employees on immediate corrective actions, reducing accidents and
            improving compliance.
          </p>

          <h2 className="text-3xl font-bold text-blue-800 mt-12 mb-6">Supply Chain Use Cases</h2>
          
          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Inventory Management Optimization</h3>
          <p className="mb-6">
            Gemba walks in warehouses helped managers observe stock handling and storage
            practices, identifying inefficiencies and implementing changes to improve inventory
            accuracy and reduce excess stock.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Supply Chain Waste Identification</h3>
          <p className="mb-6">
            By visiting warehouses and logistics centers, Gemba walks enabled leaders to observe
            processes, listen to frontline workers, and uncover sources of waste or bottlenecks in the
            supply chain, leading to targeted optimization efforts.
          </p>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              These use cases highlight the versatility of Gemba walks in uncovering hidden problems,
              engaging employees, and driving continuous improvement across manufacturing, process
              optimization, and supply chain environments.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold text-blue-800 mt-12 mb-6">References</h2>
          <ul className="list-decimal pl-6 space-y-2 text-blue-600">
            <li><a href="https://praxie.com/gemba-walks-case-studies/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Praxie: Gemba Walks Case Studies</a></li>
            <li><a href="https://www.identecsolutions.com/news/gemba-walk-examples-how-to-apply-lean-principles" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Identec Solutions: How to Apply Lean Principles</a></li>
            <li><a href="https://www.ease.io/blog/gemba-walk-examples/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Ease.io: Gemba Walk Examples</a></li>
            <li><a href="https://www.linkedin.com/pulse/digital-lean-gemba-walks-tim-stuart-j6nwc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Digital Lean Gemba Walks by Tim Stuart</a></li>
            <li><a href="https://blog.proactioninternational.com/en/how-the-gemba-walk-applies-to-lean-manufacturing-and-kaizen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Proaction International: Gemba Walk in Lean Manufacturing and Kaizen</a></li>
            <li><a href="https://www.linkedin.com/advice/0/how-do-you-integrate-gemba-other-supply" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">LinkedIn: Integrating Gemba with Supply Chain</a></li>
            <li><a href="https://www.forbes.com/sites/daveevans/2022/07/18/high-performance-supply-chains-begin-with-the-gemba" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Forbes: High Performance Supply Chains Begin with the Gemba</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;