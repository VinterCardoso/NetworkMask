import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConceptsPage from '../pages/ConceptsPage';
import SimulatorPage from '../pages/SimulatorPage';
import QuizPage from '../pages/QuizPage';
import ClasslessPage from '../pages/ClasslessPage';
import MaskCalculationPage from '../pages/MaskCalcPage';
import AddressingPage from '../pages/AdressingPage';
import ClassfulPage from '../pages/ClassfulPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ConceptsPage />} />
      <Route path="/simulator" element={<SimulatorPage />} />
      <Route path="/quiz" element={<QuizPage />} />

      <Route path="/concepts" element={<ConceptsPage />} />
      <Route path="/concepts/addressing" element={<AddressingPage />} />
      <Route path="/concepts/classful" element={<ClassfulPage />} />
      <Route path="/concepts/classless" element={<ClasslessPage />} />
      <Route path="/concepts/mask-calc" element={<MaskCalculationPage />} />
    </Routes>
  );
};

export default AppRoutes;