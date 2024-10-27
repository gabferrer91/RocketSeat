import { btnSorteio, inputAmount, inputFrom, inputTo, inputCheckbox, allSortedNumbersBox } from './DOMs.js';
import { validatingInputs } from "./Validations.js";
import { sortingNums } from "./SortNumbers.js";
import { hideElements } from "./ScreenChange.js";



validatingInputs(inputAmount, inputFrom, inputTo)

sortingNums(btnSorteio, inputAmount, inputFrom, inputTo, inputCheckbox, allSortedNumbersBox)

hideElements()