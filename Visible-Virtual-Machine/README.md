# 🖥️ VVM (Visible Virtual Machine) Assembly Project

This project explores the fundamentals of low-level programming and computer architecture by implementing an Assembly program for the Visible Virtual Machine (VVM) environment.

## 📝 About the Project
The objective of this assignment was to manipulate the VVM virtual CPU architecture to reverse a 9-digit student number (e.g., `150240310` → `013042051`). This task required an in-depth understanding of memory management, register operations, and conditional branching.

**Key Features of This Project:**
* **Architecture Simulation:** Interacted directly with the VVM virtual CPU, managing RAM addresses, the Accumulator Register, and the Program Counter.
* **Algorithmic Logic:** Developed a swapping algorithm that uses temporary memory addresses to reorder digits without losing data.
* **Instruction Set Utilization:** Leveraged core Assembly instructions such as:
  * `LDA` (Load Accumulator), `STO` (Store Accumulator) for memory management.
  * `OUT` for outputting data to the hardware log.
  * `HLT` (Halt) for controlled program termination.
* **Technical Documentation:** The project includes a detailed technical report that provides a step-by-step breakdown of the execution flow, trace views, and hardware state logging.

## 📂 Repository Contents
* `num_switch.vvm`: The complete Assembly source code for the number reversal program.
* `BBF101E_TERM_HW.pdf`: The comprehensive technical report covering the algorithm design, memory map, and simulation outputs.

## 🛠️ Technical Insights
The algorithm operates by systematically moving digits to temporary memory addresses (`90-93`) and then re-mapping them to their final positions (addresses `50-58`). The program ensures that the middle digit remains fixed while other pairs are swapped, successfully demonstrating basic stack-less memory manipulation.
