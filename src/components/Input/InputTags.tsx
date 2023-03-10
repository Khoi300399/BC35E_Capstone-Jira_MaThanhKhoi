import React from "react";
import { Select as Selects, Space } from "antd";
const { Option: Options } = Selects;

const handleChange = (value: string[]) => {};

const InputTags: React.FC = () => (
  <Selects
    mode="multiple"
    placeholder="select one country"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Options value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          π¨π³
        </span>
        China (δΈ­ε½)
      </Space>
    </Options>
    <Options value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          πΊπΈ
        </span>
        USA (ηΎε½)
      </Space>
    </Options>
    <Options value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          π―π΅
        </span>
        Japan (ζ₯ζ¬)
      </Space>
    </Options>
    <Options value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          π°π·
        </span>
        Korea (ι©ε½)
      </Space>
    </Options>
  </Selects>
);

export default InputTags;
