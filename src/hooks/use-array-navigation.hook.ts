/**
* Créer un hook "useArrayNavigation" pour gérer la navigation dans un tableau d'éléments.
* Il permet de naviguer entre les éléments du tableau en utilisant les méthodes "previous" et "next".
* Il utilise un état local pour suivre l'index actuel de l'élément sélectionné.
* Il utilise également un effet pour mettre à jour l'index actuel lorsque le tableau change.
* Il retourne l'index actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
* @param {Array} array - Le tableau d'éléments à naviguer.
* @param {number} initialIndex - L'index initial de l'élément sélectionné.
* @returns {Object} - Un objet contenant l'"index" actuel et la valeur à l'index actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
*/
 
import { useState } from "react";
 
interface NavigationObject<T> {
    index: number;
    value: T | null;
    previous: () => void;
    next: () => void;
}
 
export const useArrayNavigation = <DataType>(array:DataType[], initialIndex:number = 0):NavigationObject<DataType> => {
    // 1. Vérification si le tableau est vide
    if (array.length === 0) {
        return { index: -1, value: null, previous: () => {}, next: () => {} };
    }
 
    // 2. Vérification si l'index initial est en dehors des limites du tableau
    if (initialIndex < 0 || initialIndex >= array.length) {
        console.error('L\'index initial est en dehors des limites du tableau.');
        initialIndex = 0;
    }
 
    // 3. État local pour suivre l'index actuel
    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
    const [value, setValue] = useState<DataType>(array[currentIndex]);
 
    // 4. Fonction pour aller à l'élément précédent
    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length);
        setValue(array[currentIndex]);
    };
 
    // 5. Fonction pour aller à l'élément suivant
    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
        setValue(array[currentIndex]);
    };
 
    return { index: currentIndex, value, previous, next };
}
 