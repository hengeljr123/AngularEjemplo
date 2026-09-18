import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Item as ItemInterface } from './interfaces/item';
import { ItemService } from './services/item';

@Component({
  selector: 'app-item',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item implements OnInit {
  private itemService = inject(ItemService);

  // Incluimos 'actions' para mostrar la columna de botones
  displayedColumns: string[] = ['id', 'name', 'color', 'capacity', 'price'];
  dataSource: ItemInterface[] = [];

  // ! Guardar el Id creado
  createdItemId: string | null = null;

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemService.getItems().subscribe({
      next: (res) => {
        this.dataSource = res;
      },
      error: (err) => {
        console.error('Error al cargar items', err);
      },
    });
  }

  postItem(): void {
    const itemNuevo: Omit<ItemInterface, 'id'> = {
      name: 'Laptop de Prueba',
      data: {
        year: 2026,
        price: 1000.00,
        'CPU model': 'Intel Core i7',
        Description: '16GB RAM'
      }
    };

    this.itemService.postItem(itemNuevo).subscribe({
      next: (response) => {
        console.log('Item creado con éxito:', response);
        this.createdItemId = response.id; // * Almacenamos el ID generado
        this.getAllItems();
      },
      error: (err) => console.error('Error al crear el item', err),
    });
  }

  deleteItem(): void {
    this.itemService.deleteItem(this.createdItemId!).subscribe({
      next: () => this.getAllItems(),
      error: (err) => console.error(`Error al eliminar item con id ${this.createdItemId}`, err),
    });
  }

  patchItem(): void {
    const cambios: Partial<ItemInterface> = {
      name: 'Laptop Actualizada'
    };

    this.itemService.patchItem(this.createdItemId!, cambios).subscribe({
      next: () => this.getAllItems(),
      error: (err) => console.error(`Error al actualizar item con id ${this.createdItemId }`, err),
    });
  }
}