import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import type { TodoDeleteDialogProps } from '@/features/todo/todo.types'

export function TodoDeleteDialog({
  ariaLabel,
  buttonLabel,
  dialogTitle,
  dialogDescription,
  onConfirmDeletion,
}: TodoDeleteDialogProps) {
  return (
    <div className="mt-auto ml-auto">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="destructive"
              aria-label={ariaLabel}
              size={buttonLabel.length === 1 ? 'icon-xs' : 'sm'}
            >
              {buttonLabel}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" onClick={onConfirmDeletion} variant="destructive">
                  Yes, Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
