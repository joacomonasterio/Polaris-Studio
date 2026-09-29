import { useEffect, useRef, useState } from 'react'

/**
 * Opens a <dialog> as modal on mount, focuses the dialog itself and returns focus
 * to whatever was focused before when it unmounts.
 */
export function useModalDialog({ lockScroll = false } = {}) {
  const ref = useRef<HTMLDialogElement>(null)
  // Captured on first render, before showModal() moves focus into the dialog
  const [opener] = useState(() => document.activeElement as HTMLElement | null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    // Don't close() on cleanup: that fires the close event (→ onClose) and would
    // immediately undo the open under StrictMode's mount/unmount/mount cycle.
    // Removing the element from the DOM already takes it out of the top layer.
    if (!dialog.open) dialog.showModal()
    // showModal() focuses the first button (the X); focus the dialog instead
    dialog.focus()
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    if (lockScroll) root.style.overflow = 'hidden'
    return () => {
      if (lockScroll) root.style.overflow = previousOverflow
      opener?.focus({ preventScroll: true })
    }
  }, [opener, lockScroll])

  return ref
}
