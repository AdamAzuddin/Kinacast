import { forwardRef } from "react";

const Episodes = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="episodes-section">
    {/* Episodes content */}
    Episodes
  </div>
));

Episodes.displayName = "Episodes";

export default Episodes;
