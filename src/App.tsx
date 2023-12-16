import { Row, Col, Card, Checkbox, Space, Form } from "antd";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data1 = [
   { name: "name1", id: 1 },
   { name: "name2", id: 2 },
   { name: "name3", id: 3 },
   { name: "name4", id: 4 },
   { name: "name5", id: 5 },
   { name: "name6", id: 6 },
   { name: "name7", id: 7 },
   { name: "name8", id: 8 },
   { name: "name9", id: 9 },
];

const data2 = [
   { name: "name10", id: 10 },
   { name: "name11", id: 11 },
   { name: "name12", id: 12 },
   { name: "name13", id: 13 },
   { name: "name14", id: 14 },
   { name: "name15", id: 15 },
   { name: "name16", id: 16 },
   { name: "name17", id: 17 },
   { name: "name18", id: 18 },
];

const App = () => {
   const [leftSide, setLeftSide] = useState(data1);
   const [rightSide, setRightSide] = useState(data2);
   const [leftSelected, setLeftSelected] = useState([]);
   const [rightSelected, setRightSelected] = useState([]);

   const [form] = Form.useForm();

   const handleCheck = (obj: any, type: string) => {
      let tempArr: any = null;
      switch (type) {
         case "left":
            tempArr = [...leftSelected];
            tempArr.push(obj);
            setLeftSelected(tempArr);
            break;
         case "right":
            tempArr = [...rightSelected];
            tempArr.push(obj);
            setRightSelected(tempArr);
            break;
      }
   };

   const handleMove = (type: string) => {
      let tempArr: any = null;
      let swapArr: any = null;
      const emptyArr: any = [];

      switch (type) {
         case "left":
            tempArr = [...leftSide, ...rightSelected];
            swapArr = rightSide.filter(
               ({ id: id1 }) =>
                  !rightSelected.some(({ id: id2 }) => id2 === id1)
            );
            setLeftSide(tempArr);
            setRightSide(swapArr);
            setRightSelected(emptyArr);
            break;
         case "right":
            tempArr = [...rightSide, ...leftSelected];
            swapArr = leftSide.filter(
               ({ id: id1 }) => !leftSelected.some(({ id: id2 }) => id2 === id1)
            );
            setRightSide(tempArr);
            setLeftSide(swapArr);
            setLeftSelected(emptyArr);
            break;
      }

      form.resetFields();
   };

   const Component = (tempArr: any, type: string) => {
      return tempArr.map((obj: any) => (
         <Row>
            <Col span={4}>
               <Form.Item name={obj.name}>
                  <Checkbox onClick={() => handleCheck(obj, type)}>
                     {obj.name}
                  </Checkbox>
               </Form.Item>
            </Col>
         </Row>
      ));
   };

   return (
      <Row justify={"center"} align={"middle"}>
         <Col span={4}>
            <Card title={`${leftSelected.length}/${leftSide.length}`}>
               <Form layout="horizontal" form={form}>
                  {Component(leftSide, "left")}
               </Form>
            </Card>
         </Col>

         <Col span={1} offset={1}>
            <Space direction="vertical">
               <AiOutlineArrowRight
                  onClick={() => handleMove("right")}
                  style={{ cursor: "pointer" }}
                  size={20}
               />
               <AiOutlineArrowLeft
                  onClick={() => handleMove("left")}
                  style={{ cursor: "pointer" }}
                  size={20}
               />
            </Space>
         </Col>

         <Col span={4}>
            <Card title={`${rightSelected.length}/${rightSide.length}`}>
               <Form layout="horizontal" form={form}>
                  {Component(rightSide, "right")}
               </Form>
            </Card>
         </Col>
      </Row>
   );
};

export default App;
