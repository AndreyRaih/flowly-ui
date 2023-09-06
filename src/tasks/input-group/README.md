# Flowly UI: Input Group Component

Ссылка на Figma: https://www.figma.com/file/L99aNrt1xCvKc2htYAeEV7/UI-Components?type=design&node-id=232-903&mode=design&t=hvN6MHDJ9XGw8WBl-4

## Notes

1. При переключении между табами, состояние ввода должно сбрасываться
2. Если внутри таба несколько инпутов, то их значения передаются как массив строк
3. Если инпут один, то передаем массив с 1 элементом
4. Результат это объект, где ключ это groupId таба, а значение это массив строк из инпутов
