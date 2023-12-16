import { Row, Select, Col, Card, Image } from "antd";
import type { SelectProps } from "antd";
import { CiFlag1 } from "react-icons/ci";
import { translator } from "./language/translator";
import { useState } from "react";

import de from "./assets/de.png";
import en from "./assets/en.jpg";
import tr from "./assets/tr.png";

const languages = {
   de: de,
   en: en,
   tr: tr,
};

const options: SelectProps["options"] = [
   {
      label: (
         <>
            <CiFlag1 /> Turkey (tr)
         </>
      ),
      value: "tr",
   },
   {
      label: (
         <>
            <CiFlag1 /> English (en)
         </>
      ),
      value: "en",
   },
   {
      label: (
         <>
            <CiFlag1 /> Deutch (de)
         </>
      ),
      value: "de",
   },
];

const App = () => {
   const [language, setLanguage] = useState<string>("tr");

   const handleChange = (value: string) => {
      setLanguage(value);
   };

   return (
      <Row justify={"center"}>
         <Col span={8}>
            <Card
               title={translator("test", language)}
               cover={
                  <Image
                     preview={false}
                     src={languages[language as keyof typeof languages]}
                  />
               }
            >
               <Select
                  value={language}
                  style={{ width: "100%" }}
                  placeholder="Select language"
                  onChange={handleChange}
                  optionLabelProp="label"
                  options={options}
               />
            </Card>
         </Col>
      </Row>
   );
};

export default App;
