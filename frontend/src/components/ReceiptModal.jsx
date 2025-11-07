import React from 'react';

const ReceiptModal = ({ receipt, onClose }) => {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center relative">
        <button
          className="absolute top-2 right-3 text-gray-500 text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-4">Receipt</h3>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Total:</strong> ${receipt.total}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Thank you, <strong>{receipt.name}</strong>!
        </p>
        <p className="text-sm text-gray-700">A confirmation was sent to:</p>
        <p className="text-sm font-medium">{receipt.email}</p>
      </div>
    </div>
  );
};

export default ReceiptModal;
