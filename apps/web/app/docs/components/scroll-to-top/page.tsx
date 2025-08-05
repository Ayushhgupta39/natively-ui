import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function ScrollToTopPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Scroll to Top</h1>
        <p className="text-muted-foreground">
          A button component that appears when scrolling down and smoothly scrolls to the top when clicked.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p>
          The ScrollToTop component is automatically included in the root layout and appears on all pages when you scroll down more than 300px.
        </p>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Appears when scrolling down more than 300px (configurable)</li>
            <li>Smooth scroll animation to top</li>
            <li>Responsive design with hover effects</li>
            <li>Accessible with proper ARIA labels</li>
            <li>Fixed positioning in bottom-right corner</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2 text-left">Prop</th>
                <th className="border border-border px-4 py-2 text-left">Type</th>
                <th className="border border-border px-4 py-2 text-left">Default</th>
                <th className="border border-border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">className</td>
                <td className="border border-border px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-border px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-border px-4 py-2">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-mono text-sm">threshold</td>
                <td className="border border-border px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-border px-4 py-2 font-mono text-sm">300</td>
                <td className="border border-border px-4 py-2">Scroll distance before button appears</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Example</h2>
        <p>Scroll down on this page to see the scroll-to-top button in action!</p>
        
        {/* Generate content to enable scrolling */}
        <div className="space-y-4">
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Section {index + 1}</h3>
              <p className="text-muted-foreground">
                This is section {index + 1} of the demo. Keep scrolling down to see the scroll-to-top button appear.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Implementation Notes</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>The component uses window scroll events to detect scroll position</li>
          <li>Smooth scrolling is achieved using <code>window.scrollTo</code> with <code>behavior: 'smooth'</code></li>
          <li>The button is positioned using fixed positioning with high z-index</li>
          <li>Hover effects and transitions provide smooth user experience</li>
        </ul>
      </div>
    </div>
  );
} 