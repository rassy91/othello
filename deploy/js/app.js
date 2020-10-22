!function(){const t=function(t){this.ctx=t,this.cautionText=document.getElementById("caution"),this.GRID_SIZE=50,this.LINE_NUMBER=9,this.R=.3*this.GRID_SIZE,this.color="#ffffff",this.isWhite=1,this.board=[],this.turnStones=[],this.init()};t.prototype={init:function(){const t=this;t.ctx.translate(1,1),t.drawBoard();for(let i=1;i<t.LINE_NUMBER;i++){let i=[];for(let e=1;e<t.LINE_NUMBER;e++)i.push({});t.board.push(i)}},drawBoard:function(){const t=this,i=t.GRID_SIZE*(t.LINE_NUMBER-1);let e=0,n=0;t.drawRect(e,n,i,i,"#008833");for(let o=1;o<=t.LINE_NUMBER;o++)t.drawLine(e,0,e,i),e+=t.GRID_SIZE;for(let o=1;o<=t.LINE_NUMBER;o++)t.drawLine(0,n,i,n),n+=t.GRID_SIZE},drawRect:function(t,i,e,n,o){this.ctx.fillStyle=void 0!==o?o:"#000000",this.ctx.fillRect(t,i,e,n)},drawLine:function(t,i,e,n,o,s){this.ctx.strokeStyle=void 0!==o?o:"#000000",this.ctx.lineWidth=void 0!==s?s:1,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,n),this.ctx.closePath(),this.ctx.stroke()},startGame:function(){const t=this,i=t.GRID_SIZE*((t.LINE_NUMBER-1)/2),e=t.GRID_SIZE/2;let n,o,s=-1,c=-1,h=1;function l(l){for(let r=0;r<2;r++){let l={r:t.R};n=i+s*e,o=i+c*e,l.x=n,l.y=o,l.isWhite=h;let r=new window.myOthello.Stone(t.ctx,l);r.drawArc(l);let a=t.board[Math.floor(o/t.GRID_SIZE)][Math.floor(n/t.GRID_SIZE)];a.instance=r,a.isWhite=h,s*=-1,c*=-1}}l(),s*=-1,h*=-1,l()},validate:function(){const t=this;t.cautionText.classList.contains("isVisible")||(t.cautionText.classList.add("isVisible"),setTimeout(function(){t.cautionText.classList.remove("isVisible")},1e3))},putStone:function(t,i){const e=this;let n=Math.floor(t/e.GRID_SIZE),o=Math.floor(i/e.GRID_SIZE);if(!e.checkVacancy(n,o))return void e.validate();if(!e.checkNeighbor(n,o))return void e.validate();if(!e.checkIfPossible(n,o))return void e.validate();e.isWhite*=-1,color=e.isWhite>0?"#ffffff":"#000000";let s={x:e.GRID_SIZE*n+e.GRID_SIZE/2,y:e.GRID_SIZE*o+e.GRID_SIZE/2,r:e.R,isWhite:e.isWhite},c=new window.myOthello.Stone(e.ctx,s);c.drawArc(s);let h=e.board[o][n];h.instance=c,h.isWhite=e.isWhite,e.turnStones.length>0&&(e.turnStones.forEach(function(t){t.isWhite*=-1,t.instance.reverse()}),e.turnStones.length=0)},checkVacancy:function(t,i){return Object.keys(this.board[i][t]).length<=0},checkNeighbor:function(t,i){const e=this;let n,o,s=[[t,i-1],[t+1,i-1],[t+1,i],[t+1,i+1],[t,i+1],[t-1,i+1],[t-1,i],[t-1,i-1]];for(let c=0,h=s.length;c<h;c++)if(o=s[c][1],n=s[c][0],!(o<0||o>7||n<0||n>7)&&Object.keys(e.board[o][n]).length>0)return!0},checkIfPossible:function(t,i){const e=this,n=e.LINE_NUMBER-1-1;let o=!1,s=null,c=null;return function(){for(let h=1;h<n&&!(i-h<0);h++)if(s=e.board[i-h][t],Object.keys(s).length>0&&-1*s.isWhite===e.isWhite){for(let n=1;n<h;n++){if((c=e.board[i-n][t]).y=i-n,c.x=t,!(Object.keys(c).length>0&&c.isWhite===e.isWhite)){o=!1,e.turnStones.length=0;break}o=!0,e.turnStones.push(c)}if(o)break}}(),function(){for(let h=1;h<n&&!(i+h>7);h++)if(s=e.board[i+h][t],Object.keys(s).length>0&&-1*s.isWhite===e.isWhite){for(let n=1;n<h;n++){if((c=e.board[i+n][t]).y=i+n,c.x=t,!(Object.keys(c).length>0&&c.isWhite===e.isWhite)){o=!1,e.turnStones.length=0;break}o=!0,e.turnStones.push(c)}if(o)break}}(),o}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.BoardManager=t}(),function(){const t=function(t,i){this.canvas=t,this.color=i.color,this.stones=[],this.init()};t.prototype={init:function(){this.setEvent()},setEvent:function(){},getClickPos:function(){}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Player=t}(),function(){const t=function(t,i){this.ctx=t,this.data=i,this.isWhite=i.isWhite};t.prototype={drawArc:function(t){this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI,!0),this.ctx.fillStyle=this.isWhite>0?"#ffffff":"#000000",this.ctx.fill(),this.ctx.closePath()},reverse:function(){this.ctx.beginPath(),this.ctx.arc(this.data.x,this.data.y,this.data.r,0,2*Math.PI,!0),this.ctx.fillStyle=-1*this.isWhite>0?"#ffffff":"#000000",this.ctx.fill(),this.ctx.closePath()}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Stone=t}(),document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("canvas");if(!t.getContext)return;const i=document.getElementById("wrapper"),e=t.getContext("2d");e.canvas.width=i.clientWidth,e.canvas.height=i.clientHeight;const n=new myOthello.BoardManager(e);n.startGame(),t.addEventListener("click",function(t){n.putStone(t.offsetX,t.offsetY)})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvYXJkTWFuYWdlci5qcyIsIlBsYXllci5qcyIsIlN0b25lLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTWFuYWdlciIsImN0eCIsInRoaXMiLCJjYXV0aW9uVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJHUklEX1NJWkUiLCJMSU5FX05VTUJFUiIsIlIiLCJjb2xvciIsImlzV2hpdGUiLCJib2FyZCIsInR1cm5TdG9uZXMiLCJpbml0IiwicHJvdG90eXBlIiwic2VsZiIsInRyYW5zbGF0ZSIsImRyYXdCb2FyZCIsImkiLCJyb3ciLCJqIiwicHVzaCIsImZpZWxkU2l6ZSIsIngiLCJ5IiwiZHJhd1JlY3QiLCJkcmF3TGluZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwic3RhcnRHYW1lIiwiY2VudGVyIiwiZGlmZiIsInBvc1giLCJwb3NZIiwiZGlyMSIsImRpcjIiLCJzZXRGaXJzdFN0b25lIiwiZGF0YSIsInIiLCJzdG9uZSIsIndpbmRvdyIsIm15T3RoZWxsbyIsIlN0b25lIiwiZHJhd0FyYyIsIm9iaiIsIk1hdGgiLCJmbG9vciIsImluc3RhbmNlIiwidmFsaWRhdGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJwdXRTdG9uZSIsImNsaWNrZWRYIiwiY2xpY2tlZFkiLCJudGhHcmlkWCIsIm50aEdyaWRZIiwiY2hlY2tWYWNhbmN5IiwiY2hlY2tOZWlnaGJvciIsImNoZWNrSWZQb3NzaWJsZSIsImxlbmd0aCIsImZvckVhY2giLCJ2YWwiLCJyZXZlcnNlIiwibnRoWCIsIm50aFkiLCJPYmplY3QiLCJrZXlzIiwibGluZSIsIm5laWdoYm9ycyIsImxlbiIsIk1BWF9DT1VOVCIsImlzUG9zc2libGUiLCJ0bXBPYmoiLCJjaGVja1RvcCIsImNoZWNrQm90dG9tIiwiUGxheWVyIiwiY2FudmFzIiwic3RvbmVzIiwic2V0RXZlbnQiLCJnZXRDbGlja1BvcyIsImFyYyIsIlBJIiwiZmlsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRDb250ZXh0Iiwid3JhcHBlciIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZSIsIm9mZnNldFgiLCJvZmZzZXRZIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUVBLE1BQUFBLEVBQUEsU0FBQUMsR0FDQUMsS0FFQUQsSUFBQUEsRUFGQUMsS0FHQUMsWUFBQUMsU0FBQUMsZUFBQSxXQUhBSCxLQU1BSSxVQUFBLEdBTkFKLEtBT0FLLFlBQUEsRUFQQUwsS0FRQU0sRUFBQSxHQVJBTixLQVFBSSxVQVJBSixLQVVBTyxNQUFBLFVBVkFQLEtBV0FRLFFBQUEsRUFYQVIsS0FhQVMsU0FiQVQsS0FlQVUsY0FmQVYsS0FpQkFXLFFBR0FiLEVBQUFjLFdBS0FELEtBQUEsV0FDQSxNQUFBRSxFQUFBYixLQUdBYSxFQUFBZCxJQUFBZSxVQUFBLEVBQUEsR0FFQUQsRUFBQUUsWUFFQSxJQUFBLElBQUFDLEVBQUEsRUFBQUEsRUFBQUgsRUFBQVIsWUFBQVcsSUFBQSxDQUNBLElBQUFDLEtBRUEsSUFBQSxJQUFBQyxFQUFBLEVBQUFBLEVBQUFMLEVBQUFSLFlBQUFhLElBQ0FELEVBQUFFLFNBR0FOLEVBQUFKLE1BQUFVLEtBQUFGLEtBS0FGLFVBQUEsV0FDQSxNQUFBRixFQUFBYixLQUVBb0IsRUFBQVAsRUFBQVQsV0FBQVMsRUFBQVIsWUFBQSxHQUVBLElBQUFnQixFQUFBLEVBQ0FDLEVBQUEsRUFFQVQsRUFBQVUsU0FBQUYsRUFBQUMsRUFBQUYsRUFBQUEsRUFBQSxXQUVBLElBQUEsSUFBQUosRUFBQSxFQUFBQSxHQUFBSCxFQUFBUixZQUFBVyxJQUNBSCxFQUFBVyxTQUFBSCxFQUFBLEVBQUFBLEVBQUFELEdBQ0FDLEdBQUFSLEVBQUFULFVBRUEsSUFB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QUFBQyxlQUFBLFVBRUEsSUFBQXNGLEVBQUFRLFdBQ0EsT0FHQSxNQUFBQyxFQUFBaEcsU0FBQUMsZUFBQSxXQUNBSixFQUFBMEYsRUFBQVEsV0FBQSxNQUNBbEcsRUFBQTBGLE9BQUExRCxNQUFBbUUsRUFBQUMsWUFDQXBHLEVBQUEwRixPQUFBVyxPQUFBRixFQUFBRyxhQWlCQSxNQUFBNUYsRUFBQSxJQUFBMEMsVUFBQXJELGFBQUFDLEdBRUFVLEVBQUE4QixZQUVBa0QsRUFBQU8saUJBQUEsUUFBQSxTQUFBTSxHQUVBN0YsRUFBQXVELFNBQUFzQyxFQUFBQyxRQUFBRCxFQUFBRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgQm9hcmRNYW5hZ2VyID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuY3R4ID0gY3R4O1xuICAgICAgICBzZWxmLmNhdXRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdXRpb24nKTtcblxuXG4gICAgICAgIHNlbGYuR1JJRF9TSVpFID0gNTA7XG4gICAgICAgIHNlbGYuTElORV9OVU1CRVIgPSA5O1xuICAgICAgICBzZWxmLlIgPSBzZWxmLkdSSURfU0laRSAqIDAuMztcblxuICAgICAgICBzZWxmLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgICBzZWxmLmlzV2hpdGUgPSAxO1xuXG4gICAgICAgIHNlbGYuYm9hcmQgPSBbXTtcblxuICAgICAgICBzZWxmLnR1cm5TdG9uZXMgPSBbXTtcblxuICAgICAgICBzZWxmLmluaXQoKTtcbiAgICB9O1xuXG4gICAgQm9hcmRNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHg9MCwgeT0w44Gn5YWI44Gu5aSq44GV44GM5Y2K5YiG44GX5o+P5YaZ44GV44KM44Gq44GE44Gf44KB44CB5Z+65rqW54K544KS44Ga44KJ44GZXG4gICAgICAgICAgICBzZWxmLmN0eC50cmFuc2xhdGUoMSwgMSk7XG5cbiAgICAgICAgICAgIHNlbGYuZHJhd0JvYXJkKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2VsZi5MSU5FX05VTUJFUjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBzZWxmLkxJTkVfTlVNQkVSOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goe30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd0JvYXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZFNpemUgPSBzZWxmLkdSSURfU0laRSAqIChzZWxmLkxJTkVfTlVNQkVSIC0gMSk7XG5cbiAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcblxuICAgICAgICAgICAgc2VsZi5kcmF3UmVjdCh4LCB5LCBmaWVsZFNpemUsIGZpZWxkU2l6ZSwgJyMwMDg4MzMnKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZi5MSU5FX05VTUJFUjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3TGluZSh4LCAwLCB4LCBmaWVsZFNpemUpO1xuICAgICAgICAgICAgICAgIHggKz0gc2VsZi5HUklEX1NJWkU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzZWxmLkxJTkVfTlVNQkVSOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdMaW5lKDAsIHksIGZpZWxkU2l6ZSwgeSk7XG4gICAgICAgICAgICAgICAgeSArPSBzZWxmLkdSSURfU0laRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdSZWN0OiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5maWxsU3R5bGUgPSB0eXBlb2YgY29sb3IgIT09ICd1bmRlZmluZWQnID8gY29sb3IgOiAnIzAwMDAwMCc7XG4gICAgICAgICAgICBzZWxmLmN0eC5maWxsUmVjdCh4MSwgeTEsIHgyLCB5Mik7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3TGluZTogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIGNvbG9yLCB3aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LnN0cm9rZVN0eWxlID0gdHlwZW9mIGNvbG9yICE9PSAndW5kZWZpbmVkJyA/IGNvbG9yIDogJyMwMDAwMDAnO1xuICAgICAgICAgICAgc2VsZi5jdHgubGluZVdpZHRoID0gdHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyA/IHdpZHRoIDogMTtcblxuICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBzZWxmLmN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICAgICAgc2VsZi5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhcnRHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBzZWxmLkdSSURfU0laRSAqICgoc2VsZi5MSU5FX05VTUJFUiAtIDEpIC8gMik7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHNlbGYuR1JJRF9TSVpFIC8gMik7XG4gICAgICAgICAgICBsZXQgZGlyMSA9IC0xO1xuICAgICAgICAgICAgbGV0IGRpcjIgPSAtMTtcbiAgICAgICAgICAgIGxldCBwb3NYLCBwb3NZO1xuICAgICAgICAgICAgbGV0IGlzV2hpdGUgPSAxO1xuXG4gICAgICAgICAgICBzZXRGaXJzdFN0b25lKCk7XG4gICAgICAgICAgICBkaXIxICo9IC0xO1xuICAgICAgICAgICAgaXNXaGl0ZSAqPSAtMTtcbiAgICAgICAgICAgIHNldEZpcnN0U3RvbmUoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Rmlyc3RTdG9uZShjb2xvcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcjogc2VsZi5SXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zWCA9IGNlbnRlciArIGRpcjEgKiBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBwb3NZID0gY2VudGVyICsgZGlyMiAqIGRpZmY7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YS54ID0gcG9zWDtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS55ID0gcG9zWTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc1doaXRlID0gaXNXaGl0ZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvbmUgPSBuZXcgd2luZG93Lm15T3RoZWxsby5TdG9uZShzZWxmLmN0eCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b25lLmRyYXdBcmMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHNlbGYuYm9hcmRbTWF0aC5mbG9vcihwb3NZIC8gc2VsZi5HUklEX1NJWkUpXVtNYXRoLmZsb29yKHBvc1ggLyBzZWxmLkdSSURfU0laRSldO1xuICAgICAgICAgICAgICAgICAgICBvYmouaW5zdGFuY2UgPSBzdG9uZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmlzV2hpdGUgPSBpc1doaXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpcjEgKj0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGRpcjIgKj0gLTE7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghc2VsZi5jYXV0aW9uVGV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzVmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYXV0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKCdpc1Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhdXRpb25UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzVmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHV0U3RvbmU6IGZ1bmN0aW9uKGNsaWNrZWRYLCBjbGlja2VkWSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGxldCBudGhHcmlkWCA9IE1hdGguZmxvb3IoY2xpY2tlZFggLyBzZWxmLkdSSURfU0laRSk7XG4gICAgICAgICAgICBsZXQgbnRoR3JpZFkgPSBNYXRoLmZsb29yKGNsaWNrZWRZIC8gc2VsZi5HUklEX1NJWkUpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuY2hlY2tWYWNhbmN5KG50aEdyaWRYLCBudGhHcmlkWSkpIHtcblxuICAgICAgICAgICAgICAgIHNlbGYudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGYuY2hlY2tOZWlnaGJvcihudGhHcmlkWCwgbnRoR3JpZFkpKSB7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxmLmNoZWNrSWZQb3NzaWJsZShudGhHcmlkWCwgbnRoR3JpZFkpKSB7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmlzV2hpdGUgKj0gLTE7XG4gICAgICAgICAgICBjb2xvciA9IHNlbGYuaXNXaGl0ZSA+IDAgPyAnI2ZmZmZmZicgOiAnIzAwMDAwMCc7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHg6IChzZWxmLkdSSURfU0laRSAqIG50aEdyaWRYKSArIChzZWxmLkdSSURfU0laRSAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IChzZWxmLkdSSURfU0laRSAqIG50aEdyaWRZKSArIChzZWxmLkdSSURfU0laRSAvIDIpLFxuICAgICAgICAgICAgICAgIHI6IHNlbGYuUixcbiAgICAgICAgICAgICAgICBpc1doaXRlOiBzZWxmLmlzV2hpdGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBzdG9uZSA9IG5ldyB3aW5kb3cubXlPdGhlbGxvLlN0b25lKHNlbGYuY3R4LCBkYXRhKTtcbiAgICAgICAgICAgIHN0b25lLmRyYXdBcmMoZGF0YSk7XG5cbiAgICAgICAgICAgIGxldCBvYmogPSBzZWxmLmJvYXJkW250aEdyaWRZXVtudGhHcmlkWF07XG4gICAgICAgICAgICBvYmouaW5zdGFuY2UgPSBzdG9uZTtcbiAgICAgICAgICAgIG9iai5pc1doaXRlID0gc2VsZi5pc1doaXRlO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi50dXJuU3RvbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnR1cm5TdG9uZXMuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsLmlzV2hpdGUgKj0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHZhbC5pbnN0YW5jZS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnR1cm5TdG9uZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrVmFjYW5jeTogZnVuY3Rpb24obnRoWCwgbnRoWSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzZWxmLmJvYXJkW250aFldW250aFhdKS5sZW5ndGggPD0gMDtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrTmVpZ2hib3I6IGZ1bmN0aW9uKG50aFgsIG50aFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBsZXQgcm93LCBsaW5lO1xuXG4gICAgICAgICAgICBsZXQgbmVpZ2hib3JzID0gW1xuICAgICAgICAgICAgICAgIFtudGhYLCBudGhZIC0gMV0sICAgICAgIC8vIOS4ilxuICAgICAgICAgICAgICAgIFtudGhYICsgMSwgbnRoWSAtIDFdLCAgIC8vIOWPs+S4ilxuICAgICAgICAgICAgICAgIFtudGhYICsgMSwgbnRoWV0sICAgICAgIC8vIOWPs1xuICAgICAgICAgICAgICAgIFtudGhYICsgMSwgbnRoWSArIDFdLCAgIC8vIOWPs+S4i1xuICAgICAgICAgICAgICAgIFtudGhYLCBudGhZICsgMV0sICAgICAgIC8vIOS4i1xuICAgICAgICAgICAgICAgIFtudGhYIC0gMSwgbnRoWSArIDFdLCAgIC8vIOW3puS4i1xuICAgICAgICAgICAgICAgIFtudGhYIC0gMSwgbnRoWV0sICAgICAgIC8vIOW3plxuICAgICAgICAgICAgICAgIFtudGhYIC0gMSwgbnRoWSAtIDFdICAgIC8vIOW3puS4ilxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5laWdoYm9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGluZSA9IG5laWdoYm9yc1tpXVsxXTtcbiAgICAgICAgICAgICAgICByb3cgPSBuZWlnaGJvcnNbaV1bMF07XG5cbiAgICAgICAgICAgICAgICBpZiAobGluZSA8IDAgfHwgbGluZSA+IDcgfHwgcm93IDwgMCB8fCByb3cgPiA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLmJvYXJkW2xpbmVdW3Jvd10pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2tJZlBvc3NpYmxlOiBmdW5jdGlvbihudGhYLCBudGhZKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpICsgJyAvIDQnKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhNYXRoLmNvcyhNYXRoLlBJIC8gNCAqIGkpLCBNYXRoLnNpbihNYXRoLlBJIC8gNCAqIGkpKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgTUFYX0NPVU5UID0gKHNlbGYuTElORV9OVU1CRVIgLSAxKSAtIDE7IC8vICgo57ea44Gu5pWwLTEpIC0g6Ieq6Lqr44GM572u44GL44KM44KL44Oe44K5KVxuICAgICAgICAgICAgbGV0IGlzUG9zc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpc1RtcFBvc3NpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgb2JqID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0bXBPYmogPSBudWxsO1xuXG4gICAgICAgICAgICAvLyDnva7jgZHjgovmnaHku7ZcbiAgICAgICAgICAgIC8vIOW3puWPs+OAgeS4iuS4i+OAgeaWnOOCgTQ15bqm5LiK44Gr5ZCM44GY6Imy44Gu55+z44GM44GC44KLXG4gICAgICAgICAgICAvLyDjgYvjgaQg44Gd44Gu5ZCM44GY6Imy44Gu55+z44Go6Ieq6Lqr44Gu6ZaT44Gr6ZqZ6ZaT44Gq44GP5Yil44Gu6Imy44Gu55+z44GM44GC44KLXG5cbiAgICAgICAgICAgIC8vIGxldCBuZWlnaGJvcnMgPSBbXG4gICAgICAgICAgICAvLyAgICAgW250aFgsIG50aFkgLSAxXSwgICAgICAgLy8g5LiKXG4gICAgICAgICAgICAvLyAgICAgW250aFggKyAxLCBudGhZIC0gMV0sICAgLy8g5Y+z5LiKXG4gICAgICAgICAgICAvLyAgICAgW250aFggKyAxLCBudGhZXSwgICAgICAgLy8g5Y+zXG4gICAgICAgICAgICAvLyAgICAgW250aFggKyAxLCBudGhZICsgMV0sICAgLy8g5Y+z5LiLXG4gICAgICAgICAgICAvLyAgICAgW250aFgsIG50aFkgKyAxXSwgICAgICAgLy8g5LiLXG4gICAgICAgICAgICAvLyAgICAgW250aFggLSAxLCBudGhZICsgMV0sICAgLy8g5bem5LiLXG4gICAgICAgICAgICAvLyAgICAgW250aFggLSAxLCBudGhZXSwgICAgICAgLy8g5bemXG4gICAgICAgICAgICAvLyAgICAgW250aFggLSAxLCBudGhZIC0gMV0gICAgLy8g5bem5LiKXG4gICAgICAgICAgICAvLyBdO1xuICAgICAgICAgICAgLy8g44Gn44Gd44KM44Ge44KM44OB44Kn44OD44Kv44GZ44KL77yfXG4gICAgICAgICAgICBjaGVja1RvcCgpO1xuICAgICAgICAgICAgY2hlY2tCb3R0b20oKTtcblxuXG4gICAgICAgICAgICByZXR1cm4gaXNQb3NzaWJsZTtcblxuXG4gICAgICAgICAgICAvLyDkuIrjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrVG9wKCkge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBNQVhfQ09VTlQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudGhZIC0gaSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6Ieq6Lqr44GL44KJ6Kmy5b2T5pa55ZCR44Gu5Lit44Gn5LiA55Wq6L+R44GE55+zXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IHNlbGYuYm9hcmRbbnRoWSAtIGldW250aFhdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPiAwKSAmJiAob2JqLmlzV2hpdGUgKiAtMSA9PT0gc2VsZi5pc1doaXRlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcE9iaiA9IHNlbGYuYm9hcmRbbnRoWSAtIGpdW250aFhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcE9iai55ID0gbnRoWSAtIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wT2JqLnggPSBudGhYO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRtcE9iaikubGVuZ3RoID4gMCAmJiB0bXBPYmouaXNXaGl0ZSA9PT0gc2VsZi5pc1doaXRlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQb3NzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHVyblN0b25lcy5wdXNoKHRtcE9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUG9zc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50dXJuU3RvbmVzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQb3NzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDkuIvjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQm90dG9tKCkge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBNQVhfQ09VTlQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudGhZICsgaSA+IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqID0gc2VsZi5ib2FyZFtudGhZICsgaV1bbnRoWF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA+IDApICYmIChvYmouaXNXaGl0ZSAqIC0xID09PSBzZWxmLmlzV2hpdGUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wT2JqID0gc2VsZi5ib2FyZFtudGhZICsgal1bbnRoWF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wT2JqLnkgPSBudGhZICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBPYmoueCA9IG50aFg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModG1wT2JqKS5sZW5ndGggPiAwICYmIHRtcE9iai5pc1doaXRlID09PSBzZWxmLmlzV2hpdGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Bvc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50dXJuU3RvbmVzLnB1c2godG1wT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQb3NzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnR1cm5TdG9uZXMubGVuZ3RoID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1Bvc3NpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG5cblxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5teU90aGVsbG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5teU90aGVsbG8gPSB7fTtcbiAgICB9XG4gICAgd2luZG93Lm15T3RoZWxsby5Cb2FyZE1hbmFnZXIgPSBCb2FyZE1hbmFnZXI7XG5cbn0oKSk7IiwiOyhmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKGNhbnZhcywgZGF0YSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBzZWxmLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgc2VsZi5zdG9uZXMgPSBbXTtcblxuICAgICAgICBzZWxmLmluaXQoKTtcbiAgICB9O1xuXG4gICAgUGxheWVyLnByb3RvdHlwZSA9IHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLnNldEV2ZW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHNlbGYuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldENsaWNrUG9zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlBsYXllciA9IFBsYXllcjtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgU3RvbmUgPSBmdW5jdGlvbihjdHgsIGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5jdHggPSBjdHg7XG4gICAgICAgIHNlbGYuZGF0YSA9IGRhdGE7XG4gICAgICAgIHNlbGYuaXNXaGl0ZSA9IGRhdGEuaXNXaGl0ZTtcblxuICAgIH07XG5cbiAgICBTdG9uZS5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgZHJhd0FyYzogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgc2VsZi5jdHguYXJjKGRhdGEueCwgZGF0YS55LCBkYXRhLnIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9IHNlbGYuaXNXaGl0ZSA+IDAgPyAnI2ZmZmZmZicgOiAnIzAwMDAwMCc7XG4gICAgICAgICAgICBzZWxmLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBzZWxmLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgc2VsZi5jdHguYXJjKHNlbGYuZGF0YS54LCBzZWxmLmRhdGEueSwgc2VsZi5kYXRhLnIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9IHNlbGYuaXNXaGl0ZSAqIC0xID4gMCA/ICcjZmZmZmZmJyA6ICcjMDAwMDAwJztcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlN0b25lID0gU3RvbmU7XG5cbn0oKSk7IiwiOyhmdW5jdGlvbigpIHtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgaWYgKCFjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd3JhcHBlci5jbGllbnRXaWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICBsZXQgcGxheWVyRGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IG15T3RoZWxsby5Cb2FyZE1hbmFnZXIoY3R4KTtcblxuICAgICAgICBib2FyZC5zdGFydEdhbWUoKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGJvYXJkLnB1dFN0b25lKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyDjg5XjgqPjg7zjg6vjg4njgpLmm7jjgY/vvIg4eDjvvIlcbiAgICAgICAgLy8g5ZCE44Oe44K555uu44Gu44Ko44Oq44Ki5oOF5aCx44KS5L+d5oyB77yIc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFnvvIlcbiAgICAgICAgLy8gICAgICDjgq/jg6rjg4Pjgq/jgZfjgZ/kvY3nva7jgahjYW52YXPkuIrjga7kvY3nva7jga7lpInmj5vjgYzlv4XopoHvvJ9cbiAgICAgICAgLy8g44OX44Os44Kk44Ok44O855m944O76buS44KS44K744OD44OIXG4gICAgICAgIC8vICAgICAg44OV44Op44Kw44Gr44GZ44KL77yfXG4gICAgICAgIC8vIOS4reWkruOBq+eZvem7kjLjgZPjgZrjgaTjgrvjg4Pjg4hcblxuICAgICAgICAvLyDlkITjg5fjg6zjgqTjg6Tjg7zjga7nva7jgYTjgZ/nn7PjgpLkv53mjIHjgZnjgovphY3liJdcbiAgICAgICAgLy9cblxuXG5cbiAgICB9KTtcblxufSgpKTtcblxuLyoqXG4gKiAvLyBUT0RPIOizquWVj1xuICpcbiAqIDEuXG4g44CM5Yik5a6a44GZ44KL44CN44Go44GE44GG6Iux6Kqe44Gv5L2V44KS5L2/44Gj44Gm44G+44GZ44GL77yfXG5cbiBmaW5kPyBqdWRnZT8gZGVjaWRlP1xuXG5cbiAyLlxuIGNocm9tZeOBrmRlduODhOODvOODq+OBp+OCpOODs+OCueOCv+ODs+OCueOBq+WFpeOBo+OBpuOBhOOCi3Tjgajjga/jgarjgpPjga7mhI/lkbPjgIHnlaXvvIjvvJ/vvInjgafjgZnjgYvvvJ/jgqTjg7Pjgrnjgr/jg7PjgrnjgpLjg63jgrDjgavlh7rjgZnjgah044Go44Gq44KL77yfXG4gYm9hcmQuc3RhcnRHYW1l44Gu5pyA5b6M44GnY29uc29sZS5sb2coc2VsZi5zdG9uZVBvc2VzKTvjgZnjgovjgajnorroqo3jgafjgY3jgotcblxuICovXG4iXX0=