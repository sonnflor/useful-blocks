//% weight=100 color=#0fbc11 icon="↻"
namespace usefulBlocks {
    /**
     * Wiederhole den Block solange die Bedingung erfüllt ist.
     */
    //% block="während %condition"
    //% condition.shadow=logic_boolean
    export function whileLoop(condition: () => boolean, body: () => void): void {
        while (condition()) {
            body();
        }
    }
}