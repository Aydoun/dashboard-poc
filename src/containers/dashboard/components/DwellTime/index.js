import React, { memo } from "react";
import Pagination from "components/Pagination";
import Text from "components/Text";

const DwellTime = () => {
  return (
    <div>
      <div className="dashboard__dwelltime">14 min</div>
      <div>
        <Text color="gray" size="small">
          Floor
        </Text>
        <Pagination
          initialCheck={3}
          collection={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </div>
      <div>
        <Text color="gray" size="small">
          Zones
        </Text>
        <Pagination
          initialCheck={0}
          collection={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
      </div>
    </div>
  );
};

export default memo(DwellTime);
