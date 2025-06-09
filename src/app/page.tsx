"use client";

import { Button, Radio } from "antd";
import { useState } from "react";

export default function HomePage() {
  const [weight, setWeight] = useState("");
  const [heigh, setHeigh] = useState("");
  const [gender, setGender] = useState("male");
  const [answer, setAnswer] = useState("");
  const [color, setColor] = useState("text-gray-800");

  const option = [
    { label: "ชาย", value: "male" },
    { label: "หญิง", value: "female" },
  ];

  function processBMI() {
    if (heigh === "" || weight === "") {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const h = parseFloat(heigh);
    const w = parseFloat(weight);
    const bmi = w / ((h / 100) * (h / 100));

    let result = "";
    let resultColor = "";
    let emoji = "";

    if (gender === "male") {
      if (bmi < 18.5) {
        result = "ผอมไป";
        resultColor = "text-blue-500";
        emoji = "🧍‍♂️";
      } else if (bmi < 25) {
        result = "ปกติ";
        resultColor = "text-green-600";
        emoji = "✅";
      } else if (bmi < 30) {
        result = "เริ่มอ้วน";
        resultColor = "text-yellow-600";
        emoji = "⚠️";
      } else if (bmi < 35.5) {
        result = "อ้วน";
        resultColor = "text-orange-600";
        emoji = "⚠️";
      } else {
        result = "อ้วนมากผิดปกติ";
        resultColor = "text-red-600";
        emoji = "❗";
      }
    } else {
      if (bmi < 18.5) {
        result = "ผอมไป";
        resultColor = "text-blue-500";
        emoji = "🧍‍♀️";
      } else if (bmi < 23) {
        result = "ปกติ";
        resultColor = "text-green-600";
        emoji = "✅";
      } else if (bmi < 30) {
        result = "เริ่มอ้วน";
        resultColor = "text-yellow-600";
        emoji = "⚠️";
      } else if (bmi < 35.5) {
        result = "อ้วน";
        resultColor = "text-orange-600";
        emoji = "⚠️";
      } else {
        result = "อ้วนมากผิดปกติ";
        resultColor = "text-red-600";
        emoji = "❗";
      }
    }

    setAnswer(`${emoji} ค่า BMI: ${bmi.toFixed(2)} - ${result}`);
    setColor(resultColor);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">🧮 BMI Calculator</h2>
          <p className="text-gray-500 mt-1">เลือกเพศ และกรอกข้อมูลด้านล่าง</p>
        </div>

        <Radio.Group
          options={option}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          optionType="button"
          buttonStyle="solid"
          className="w-full flex justify-center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-1">
              น้ำหนัก (kg)
            </label>
            <input
              type="number"
              id="weight"
              className="block w-full rounded-lg border border-gray-300 text-black px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="เช่น 60"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-1">
              ส่วนสูง (cm)
            </label>
            <input
              type="number"
              id="height"
              className="block w-full rounded-lg border border-gray-300 text-black px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              value={heigh}
              onChange={(e) => setHeigh(e.target.value)}
              placeholder="เช่น 170"
            />
          </div>
        </div>

        <div className="text-center pt-2">
          <Button type="primary" size="large" className="rounded-full px-10" onClick={processBMI}>
            🔍 คำนวณ BMI
          </Button>
        </div>

        {answer && (
          <div className="text-center mt-6">
            <p className={`text-xl font-bold ${color}`}>{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
