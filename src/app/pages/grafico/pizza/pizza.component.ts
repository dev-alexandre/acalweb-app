import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-pizza',
  template: `<div echarts [options]="options" class="echart"></div>`,
})

export class PizzaComponent implements  OnInit, AfterViewInit, OnDestroy {

  @Input()
  fatias: {name: string, value: number}[];

  private nomes: string[] = [];

  public options: any = {};
  private themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngOnInit(): void {
    this.fatias.forEach(p => {
      this.nomes.push(p.name);
      }
    );
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        legend: {
          orient: 'Vertical',
          left: 'left',
          data: this.nomes,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Categorias',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.fatias,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
