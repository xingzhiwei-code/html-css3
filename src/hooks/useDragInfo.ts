interface DragInfo {
  dragIndex: number;
  targetIndex: number;
  startPosition: number;
  currentX: number;
  currentWidth: number;
  minWidth: number;
  maxWidth: number;
}

/**
 * @description ant-design table组件拖拽
 * @param tableEl 表格dom对象
 */
export const useTableDrag = (tableEl: any) => {
  const dragInfo = ref<DragInfo | null>(null);

  const handleMouseDown = (index: number, event: MouseEvent) => {
    const th = event;
    const startPosition = event.clientX;
    const currentWidth = th.offsetX;
    const minWidth = currentWidth / 2;
    const maxWidth = currentWidth * 2;

    dragInfo.value = {
      dragIndex: index,
      targetIndex: index,
      startPosition,
      currentX: startPosition,
      currentWidth,
      minWidth,
      maxWidth,
    };
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!dragInfo.value) {
      return;
    }

    event.preventDefault();

    const { dragIndex, targetIndex, startPosition, currentX, currentWidth, minWidth, maxWidth } = dragInfo.value;

    const deltaX = event.clientX - currentX;
    const newWidth = Math.min(Math.max(currentWidth + deltaX, minWidth), maxWidth);

    if (deltaX !== 0) {
      const cells = tableEl.querySelectorAll(`tr td:nth-child(${dragIndex + 1}), tr th:nth-child(${dragIndex + 1})`);

      cells.forEach((cell: any) => {
        cell.style.width = `${newWidth}px`;
      });

      if (dragIndex !== targetIndex) {
        const cells = tableEl.querySelectorAll(`tr td:nth-child(${targetIndex + 1}), tr th:nth-child(${targetIndex + 1})`);

        cells.forEach((cell: any) => {
          cell.style.width = `${currentWidth - deltaX}px`;
        });
      }

      dragInfo.value.currentX = event.clientX;
      dragInfo.value.currentWidth = newWidth;
    }
  };

  const handleMouseUp = () => {
    dragInfo.value = null;
  };

  onMounted(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  onUnmounted(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  });

  return {
    handleMouseDown,
  };
};
