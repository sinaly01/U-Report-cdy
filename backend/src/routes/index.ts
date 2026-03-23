import { Router, Request, Response } from 'express';

const router = Router();

// Route exemple
router.get('/articles', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    data: [
      { id: 1, title: 'Article 1 from Backend' },
      { id: 2, title: 'Article 2 from Backend' }
    ]
  });
});

export default router;
