!function(){const t=function(t){this.ctx=t,this.GRID_SIZE=50,this.LINE_NUMBER=9,this.R=.3*this.GRID_SIZE,this.color="#ffffff",this.isWhite=1,this.board=[],this.init()};t.prototype={init:function(){const t=this;t.ctx.translate(1,1),t.drawBoard();for(let o=1;o<t.LINE_NUMBER;o++){let o=[];for(let i=1;i<t.LINE_NUMBER;i++)o.push({});t.board.push(o)}},drawBoard:function(){const t=this,o=t.GRID_SIZE*(t.LINE_NUMBER-1);let i=0,e=0;t.drawRect(i,e,o,o,"#008833");for(let n=1;n<=t.LINE_NUMBER;n++)t.drawLine(i,0,i,o),i+=t.GRID_SIZE;for(let n=1;n<=t.LINE_NUMBER;n++)t.drawLine(0,e,o,e),e+=t.GRID_SIZE},drawRect:function(t,o,i,e,n){this.ctx.fillStyle=void 0!==n?n:"#000000",this.ctx.fillRect(t,o,i,e)},drawLine:function(t,o,i,e,n,s){this.ctx.strokeStyle=void 0!==n?n:"#000000",this.ctx.lineWidth=void 0!==s?s:1,this.ctx.beginPath(),this.ctx.moveTo(t,o),this.ctx.lineTo(i,e),this.ctx.closePath(),this.ctx.stroke()},startGame:function(){const t=this,o=t.GRID_SIZE*((t.LINE_NUMBER-1)/2),i=t.GRID_SIZE/2;let e,n,s=-1,c=-1,h=1,l={r:t.R};function r(r){for(let f=0;f<2;f++){e=o+s*i,n=o+c*i,l.x=e,l.y=n,l.color=r;let f=new window.myOthello.Stone(t.ctx,l);f.drawArc(l);let a=t.board[Math.floor(n/t.GRID_SIZE)][Math.floor(e/t.GRID_SIZE)];a.instance=f,a.isWhite=h,s*=-1,c*=-1}}r("#ffffff"),s*=-1,h*=-1,r("#000000")},putStone:function(t,o){let i=Math.floor(t/this.GRID_SIZE),e=Math.floor(o/this.GRID_SIZE);if(!this.checkVacancy(i,e))return;if(!this.checkNeighbor(i,e))return;this.isWhite*=-1,color=this.isWhite>0?"#ffffff":"#000000";let n={x:this.GRID_SIZE*i+this.GRID_SIZE/2,y:this.GRID_SIZE*e+this.GRID_SIZE/2,r:this.R,color:color},s=new window.myOthello.Stone(this.ctx,n);s.drawArc(n);let c=this.board[e][i];c.instance=s,c.isWhite=this.isWhite},checkVacancy:function(t,o){return Object.keys(this.board[o][t]).length<=0},checkNeighbor:function(t,o){const i=this;let e,n,s=[[t,o+1],[t+1,o+1],[t+1,o],[t+1,o-1],[t,o-1],[t-1,o-1],[t-1,o],[t-1,o+1]];for(let c=0,h=s.length;c<h;c++)if(n=s[c][1],e=s[c][0],!(n<0||n>7||e<0||e>7)&&Object.keys(i.board[n][e]).length>0)return!0},checkAvailability:function(t,o){const i=this,e=7;let n=0,s=!1;!function(){n=0;let c=!1;for(let n=0,h=i.stonePoses.length;n<h;n++){for(let h=0;h<e&&!(o-h<0);h++)if(i.stonePoses[n].pos[0]===t&&i.stonePoses[n].pos[1]===o-h&&i.stonePoses[n].isWhite===-1*i.isWhite){console.log(i.stonePoses[n]);for(let t=1;t<h;t++)if(i.stonePoses[n].pos[1]===o-t&&i.stonePoses[n].isWhite===i.isWhite){console.log(i.stonePoses[n]),c=!0,s=!0;break}}if(c)break}}()}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.BoardManager=t}(),function(){const t=function(t,o){this.canvas=t,this.color=o.color,this.stones=[],this.init()};t.prototype={init:function(){this.setEvent()},setEvent:function(){},getClickPos:function(){}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Player=t}(),function(){const t=function(t,o){this.ctx=t,this.color=o.color};t.prototype={drawArc:function(t){this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI,!0),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.closePath()}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Stone=t}(),document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("canvas");if(!t.getContext)return;const o=document.getElementById("wrapper"),i=t.getContext("2d");i.canvas.width=o.clientWidth,i.canvas.height=o.clientHeight;const e=new myOthello.BoardManager(i);e.startGame(),t.addEventListener("click",function(t){e.putStone(t.offsetX,t.offsetY)})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvYXJkTWFuYWdlci5qcyIsIlBsYXllci5qcyIsIlN0b25lLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTWFuYWdlciIsImN0eCIsInRoaXMiLCJHUklEX1NJWkUiLCJMSU5FX05VTUJFUiIsIlIiLCJjb2xvciIsImlzV2hpdGUiLCJib2FyZCIsImluaXQiLCJwcm90b3R5cGUiLCJzZWxmIiwidHJhbnNsYXRlIiwiZHJhd0JvYXJkIiwiaSIsInJvdyIsImoiLCJwdXNoIiwiZmllbGRTaXplIiwieCIsInkiLCJkcmF3UmVjdCIsImRyYXdMaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJzdGFydEdhbWUiLCJjZW50ZXIiLCJkaWZmIiwicG9zWCIsInBvc1kiLCJkaXIxIiwiZGlyMiIsImRhdGEiLCJyIiwic2V0Rmlyc3RTdG9uZSIsInN0b25lIiwid2luZG93IiwibXlPdGhlbGxvIiwiU3RvbmUiLCJkcmF3QXJjIiwib2JqIiwiTWF0aCIsImZsb29yIiwiaW5zdGFuY2UiLCJwdXRTdG9uZSIsImNsaWNrZWRYIiwiY2xpY2tlZFkiLCJudGhHcmlkWCIsIm50aEdyaWRZIiwiY2hlY2tWYWNhbmN5IiwiY2hlY2tOZWlnaGJvciIsIm50aFgiLCJudGhZIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImxpbmUiLCJuZWlnaGJvcnMiLCJsZW4iLCJjaGVja0F2YWlsYWJpbGl0eSIsIk1BWF9DT1VOVCIsImNvdW50IiwiaXNBdmFpbGFibGUiLCJ0bXBGbGFnIiwic3RvbmVQb3NlcyIsInBvcyIsImNvbnNvbGUiLCJsb2ciLCJrIiwiY2hlY2tUb3AiLCJQbGF5ZXIiLCJjYW52YXMiLCJzdG9uZXMiLCJzZXRFdmVudCIsImdldENsaWNrUG9zIiwiYXJjIiwiUEkiLCJmaWxsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid3JhcHBlciIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZSIsIm9mZnNldFgiLCJvZmZzZXRZIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUVBLE1BQUFBLEVBQUEsU0FBQUMsR0FDQUMsS0FFQUQsSUFBQUEsRUFGQUMsS0FJQUMsVUFBQSxHQUpBRCxLQUtBRSxZQUFBLEVBTEFGLEtBTUFHLEVBQUEsR0FOQUgsS0FNQUMsVUFOQUQsS0FRQUksTUFBQSxVQVJBSixLQVNBSyxRQUFBLEVBVEFMLEtBV0FNLFNBWEFOLEtBYUFPLFFBR0FULEVBQUFVLFdBS0FELEtBQUEsV0FDQSxNQUFBRSxFQUFBVCxLQUdBUyxFQUFBVixJQUFBVyxVQUFBLEVBQUEsR0FFQUQsRUFBQUUsWUFFQSxJQUFBLElBQUFDLEVBQUEsRUFBQUEsRUFBQUgsRUFBQVAsWUFBQVUsSUFBQSxDQUNBLElBQUFDLEtBRUEsSUFBQSxJQUFBQyxFQUFBLEVBQUFBLEVBQUFMLEVBQUFQLFlBQUFZLElBQ0FELEVBQUFFLFNBR0FOLEVBQUFILE1BQUFTLEtBQUFGLEtBS0FGLFVBQUEsV0FDQSxNQUFBRixFQUFBVCxLQUVBZ0IsRUFBQVAsRUFBQVIsV0FBQVEsRUFBQVAsWUFBQSxHQUVBLElBQUFlLEVBQUEsRUFDQUMsRUFBQSxFQUVBVCxFQUFBVSxTQUFBRixFQUFBQyxFQUFBRixFQUFBQSxFQUFBLFdBRUEsSUFBQSxJQUFBSixFQUFBLEVBQUFBLEdBQUFILEVBQUFQLFlBQUFVLElBQ0FILEVBQUFXLFNBQUFILEVBQUEsRUFBQUEsRUFBQUQsR0FDQUMsR0FBQVIsRUFBQVIsVUFFQSxJQUFBLElBQUFXLEVBQUEsRUFBQUEsR0FBQUgsRUFBQVAsWUFBQVUsSUFDQUgsRUFBQVcsU0FBQSxFQUFBRixFQUFBRixFQUFBRSxHQUNBQSxHQUFBVCxFQUFBUixXQUtBa0IsU0FBQSxTQUFBRSxFQUFBQyxFQUFBQyxF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QTBDLEVBQUFDLFFBQUFELEVBQUFFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBCb2FyZE1hbmFnZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5jdHggPSBjdHg7XG5cbiAgICAgICAgc2VsZi5HUklEX1NJWkUgPSA1MDtcbiAgICAgICAgc2VsZi5MSU5FX05VTUJFUiA9IDk7XG4gICAgICAgIHNlbGYuUiA9IHNlbGYuR1JJRF9TSVpFICogMC4zO1xuXG4gICAgICAgIHNlbGYuY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICAgIHNlbGYuaXNXaGl0ZSA9IDE7XG5cbiAgICAgICAgc2VsZi5ib2FyZCA9IFtdO1xuXG4gICAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH07XG5cbiAgICBCb2FyZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8geD0wLCB5PTDjgaflhYjjga7lpKrjgZXjgYzljYrliIbjgZfmj4/lhpnjgZXjgozjgarjgYTjgZ/jgoHjgIHln7rmupbngrnjgpLjgZrjgonjgZlcbiAgICAgICAgICAgIHNlbGYuY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgICAgICAgICAgc2VsZi5kcmF3Qm9hcmQoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzZWxmLkxJTkVfTlVNQkVSOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHNlbGYuTElORV9OVU1CRVI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5ib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU2l6ZSA9IHNlbGYuR1JJRF9TSVpFICogKHNlbGYuTElORV9OVU1CRVIgLSAxKTtcblxuICAgICAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuXG4gICAgICAgICAgICBzZWxmLmRyYXdSZWN0KHgsIHksIGZpZWxkU2l6ZSwgZmllbGRTaXplLCAnIzAwODgzMycpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzZWxmLkxJTkVfTlVNQkVSOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdMaW5lKHgsIDAsIHgsIGZpZWxkU2l6ZSk7XG4gICAgICAgICAgICAgICAgeCArPSBzZWxmLkdSSURfU0laRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGYuTElORV9OVU1CRVI7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd0xpbmUoMCwgeSwgZmllbGRTaXplLCB5KTtcbiAgICAgICAgICAgICAgICB5ICs9IHNlbGYuR1JJRF9TSVpFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd1JlY3Q6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCBjb2xvcikge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9IHR5cGVvZiBjb2xvciAhPT0gJ3VuZGVmaW5lZCcgPyBjb2xvciA6ICcjMDAwMDAwJztcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGxSZWN0KHgxLCB5MSwgeDIsIHkyKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdMaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgY29sb3IsIHdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlU3R5bGUgPSB0eXBlb2YgY29sb3IgIT09ICd1bmRlZmluZWQnID8gY29sb3IgOiAnIzAwMDAwMCc7XG4gICAgICAgICAgICBzZWxmLmN0eC5saW5lV2lkdGggPSB0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnID8gd2lkdGggOiAxO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHNlbGYuY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICAgICAgc2VsZi5jdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICAgICAgICBzZWxmLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgc2VsZi5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBzdGFydEdhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbnRlciA9IHNlbGYuR1JJRF9TSVpFICogKChzZWxmLkxJTkVfTlVNQkVSIC0gMSkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAoc2VsZi5HUklEX1NJWkUgLyAyKTtcbiAgICAgICAgICAgIGxldCBkaXIxID0gLTE7XG4gICAgICAgICAgICBsZXQgZGlyMiA9IC0xO1xuICAgICAgICAgICAgbGV0IHBvc1gsIHBvc1k7XG4gICAgICAgICAgICBsZXQgaXNXaGl0ZSA9IDE7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICByOiBzZWxmLlJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldEZpcnN0U3RvbmUoJyNmZmZmZmYnKTtcbiAgICAgICAgICAgIGRpcjEgKj0gLTE7XG4gICAgICAgICAgICBpc1doaXRlICo9IC0xO1xuICAgICAgICAgICAgc2V0Rmlyc3RTdG9uZSgnIzAwMDAwMCcpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRGaXJzdFN0b25lKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWCA9IGNlbnRlciArIGRpcjEgKiBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBwb3NZID0gY2VudGVyICsgZGlyMiAqIGRpZmY7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YS54ID0gcG9zWDtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS55ID0gcG9zWTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb2xvciA9IGNvbG9yO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9uZSA9IG5ldyB3aW5kb3cubXlPdGhlbGxvLlN0b25lKHNlbGYuY3R4LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvbmUuZHJhd0FyYyhkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gc2VsZi5ib2FyZFtNYXRoLmZsb29yKHBvc1kgLyBzZWxmLkdSSURfU0laRSldW01hdGguZmxvb3IocG9zWCAvIHNlbGYuR1JJRF9TSVpFKV07XG4gICAgICAgICAgICAgICAgICAgIG9iai5pbnN0YW5jZSA9IHN0b25lO1xuICAgICAgICAgICAgICAgICAgICBvYmouaXNXaGl0ZSA9IGlzV2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGlyMSAqPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZGlyMiAqPSAtMTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXG4gICAgICAgIHB1dFN0b25lOiBmdW5jdGlvbihjbGlja2VkWCwgY2xpY2tlZFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBsZXQgbnRoR3JpZFggPSBNYXRoLmZsb29yKGNsaWNrZWRYIC8gc2VsZi5HUklEX1NJWkUpO1xuICAgICAgICAgICAgbGV0IG50aEdyaWRZID0gTWF0aC5mbG9vcihjbGlja2VkWSAvIHNlbGYuR1JJRF9TSVpFKTtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLmNoZWNrVmFjYW5jeShudGhHcmlkWCwgbnRoR3JpZFkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxmLmNoZWNrTmVpZ2hib3IobnRoR3JpZFgsIG50aEdyaWRZKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICghc2VsZi5jaGVja0F2YWlsYWJpbGl0eShudGhHcmlkWCwgbnRoR3JpZFkpKSB7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm47XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIHNlbGYuaXNXaGl0ZSAqPSAtMTtcbiAgICAgICAgICAgIGNvbG9yID0gc2VsZi5pc1doaXRlID4gMCA/ICcjZmZmZmZmJyA6ICcjMDAwMDAwJztcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgeDogKHNlbGYuR1JJRF9TSVpFICogbnRoR3JpZFgpICsgKHNlbGYuR1JJRF9TSVpFIC8gMiksXG4gICAgICAgICAgICAgICAgeTogKHNlbGYuR1JJRF9TSVpFICogbnRoR3JpZFkpICsgKHNlbGYuR1JJRF9TSVpFIC8gMiksXG4gICAgICAgICAgICAgICAgcjogc2VsZi5SLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHN0b25lID0gbmV3IHdpbmRvdy5teU90aGVsbG8uU3RvbmUoc2VsZi5jdHgsIGRhdGEpO1xuICAgICAgICAgICAgc3RvbmUuZHJhd0FyYyhkYXRhKTtcblxuICAgICAgICAgICAgbGV0IG9iaiA9IHNlbGYuYm9hcmRbbnRoR3JpZFldW250aEdyaWRYXTtcbiAgICAgICAgICAgIG9iai5pbnN0YW5jZSA9IHN0b25lO1xuICAgICAgICAgICAgb2JqLmlzV2hpdGUgPSBzZWxmLmlzV2hpdGU7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBjaGVja1ZhY2FuY3k6IGZ1bmN0aW9uKG50aFgsIG50aFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2VsZi5ib2FyZFtudGhZXVtudGhYXSkubGVuZ3RoIDw9IDA7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBjaGVja05laWdoYm9yOiBmdW5jdGlvbihudGhYLCBudGhZKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgbGV0IHJvdywgbGluZTtcblxuICAgICAgICAgICAgbGV0IG5laWdoYm9ycyA9IFtcbiAgICAgICAgICAgICAgICBbbnRoWCwgbnRoWSArIDFdLCAgICAgICAvLyDkuIpcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFkgKyAxXSwgICAvLyDlj7PkuIpcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFldLCAgICAgICAvLyDlj7NcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFkgLSAxXSwgICAvLyDlj7PkuItcbiAgICAgICAgICAgICAgICBbbnRoWCwgbnRoWSAtIDFdLCAgICAgICAvLyDkuItcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFkgLSAxXSwgICAvLyDlt6bkuItcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFldLCAgICAgICAvLyDlt6ZcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFkgKyAxXSAgICAvLyDlt6bkuIpcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBuZWlnaGJvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxpbmUgPSBuZWlnaGJvcnNbaV1bMV07XG4gICAgICAgICAgICAgICAgcm93ID0gbmVpZ2hib3JzW2ldWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUgPCAwIHx8IGxpbmUgPiA3IHx8IHJvdyA8IDAgfHwgcm93ID4gNykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2VsZi5ib2FyZFtsaW5lXVtyb3ddKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrQXZhaWxhYmlsaXR5OiBmdW5jdGlvbihjbGlja2VkWCwgY2xpY2tlZFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zdCBNQVhfQ09VTlQgPSA3O1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCB0bXBGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaXNBdmFpbGFibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8g572u44GR44KL5p2h5Lu2XG4gICAgICAgICAgICAvLyDlt6blj7PjgIHkuIrkuIvjgIHmlpzjgoE0NeW6puS4iuOBq+WQjOOBmOiJsuOBruefs+OBjOOBguOCiyDjgYvjgaQg44Gd44Gu5ZCM44GY6Imy44Gu55+z44Go6Ieq6Lqr44Gu6ZaT44Gr6ZqZ6ZaT44Gq44GP5Yil44Gu6Imy44Gu55+z44GM44GC44KLXG5cbiAgICAgICAgICAgIC8vIOS4iiAgICBbbnRoWCwgbnRoWSArIDFdLFxuICAgICAgICAgICAgLy8g5Y+z5LiKICAgW250aFggKyAxLCBudGhZICsgMV0sXG4gICAgICAgICAgICAvLyDlj7MgICAgW250aFggKyAxLCBudGhZXSxcbiAgICAgICAgICAgIC8vIOWPs+S4iyAgIFtudGhYICsgMSwgbnRoWSAtIDFdLFxuICAgICAgICAgICAgLy8g5LiLICAgIFtudGhYLCBudGhZIC0gMV0sXG4gICAgICAgICAgICAvLyDlt6bkuIsgICBbbnRoWCAtIDEsIG50aFkgLSAxXSxcbiAgICAgICAgICAgIC8vIOW3piAgICBbbnRoWCAtIDEsIG50aFldLFxuICAgICAgICAgICAgLy8g5bem5LiKICAgW250aFggLSAxLCBudGhZICsgMV1cbiAgICAgICAgICAgIC8vIOOBp+OBneOCjOOBnuOCjOODgeOCp+ODg+OCr+OBmeOCi++8n1xuXG4gICAgICAgICAgICBjaGVja1RvcCgpO1xuXG4gICAgICAgICAgICAvLyDkuIrjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrVG9wKCkge1xuXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0bXBGbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gc2VsZi5zdG9uZVBvc2VzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTUFYX0NPVU5UOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRZIC0gaiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Ieq6Lqr44Go5ZCM5YiX44GL44Gk5ZCM6KGM44Gr55+z44GM44GC44KK44CB44GL44Gk5ZCM44GY6Imy44Gu5aC05ZCI77yI6Ieq6Lqr44Gr6L+R44GE5L2N572u44GL44KJ5Yik5a6a77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdG9uZVBvc2VzW2ldLnBvc1swXSA9PT0gY2xpY2tlZFggJiYgc2VsZi5zdG9uZVBvc2VzW2ldLnBvc1sxXSA9PT0gY2xpY2tlZFkgLSBqICYmIHNlbGYuc3RvbmVQb3Nlc1tpXS5pc1doaXRlID09PSBzZWxmLmlzV2hpdGUgKiAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5zdG9uZVBvc2VzW2ldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiHqui6q+OBqOWQjOWIl+OBi+OBpOWQjOihjOOBq+OBguOCi+WQjOOBmOiJsuOBruefs+OBi+OCieOAgeOBi+OBpOWQjOOBmOiJsuOBruWgtOWQiO+8iOiHqui6q+OBq+i/keOBhOS9jee9ruOBi+OCieWIpOWumu+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgajsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0b25lUG9zZXNbaV0ucG9zWzFdID09PSBjbGlja2VkWSAtIGsgJiYgc2VsZi5zdG9uZVBvc2VzW2ldLmlzV2hpdGUgPT09IHNlbGYuaXNXaGl0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5zdG9uZVBvc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuc3RvbmVQb3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG1wRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRtcEZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5teU90aGVsbG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5teU90aGVsbG8gPSB7fTtcbiAgICB9XG4gICAgd2luZG93Lm15T3RoZWxsby5Cb2FyZE1hbmFnZXIgPSBCb2FyZE1hbmFnZXI7XG5cbn0oKSk7IiwiOyhmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKGNhbnZhcywgZGF0YSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBzZWxmLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgc2VsZi5zdG9uZXMgPSBbXTtcblxuICAgICAgICBzZWxmLmluaXQoKTtcbiAgICB9O1xuXG4gICAgUGxheWVyLnByb3RvdHlwZSA9IHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLnNldEV2ZW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHNlbGYuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldENsaWNrUG9zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlBsYXllciA9IFBsYXllcjtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgU3RvbmUgPSBmdW5jdGlvbihjdHgsIGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5jdHggPSBjdHg7XG4gICAgICAgIHNlbGYuY29sb3IgPSBkYXRhLmNvbG9yO1xuXG4gICAgfTtcblxuICAgIFN0b25lLnByb3RvdHlwZSA9IHtcblxuICAgICAgICBkcmF3QXJjOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBzZWxmLmN0eC5hcmMoZGF0YS54LCBkYXRhLnksIGRhdGEuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFN0eWxlID0gZGF0YS5jb2xvcjtcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlN0b25lID0gU3RvbmU7XG5cbn0oKSk7IiwiOyhmdW5jdGlvbigpIHtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICAgICAgaWYgKCFjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd3JhcHBlci5jbGllbnRXaWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSB3cmFwcGVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICBsZXQgcGxheWVyRGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IG15T3RoZWxsby5Cb2FyZE1hbmFnZXIoY3R4KTtcblxuICAgICAgICBib2FyZC5zdGFydEdhbWUoKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGJvYXJkLnB1dFN0b25lKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyDjg5XjgqPjg7zjg6vjg4njgpLmm7jjgY/vvIg4eDjvvIlcbiAgICAgICAgLy8g5ZCE44Oe44K555uu44Gu44Ko44Oq44Ki5oOF5aCx44KS5L+d5oyB77yIc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFnvvIlcbiAgICAgICAgLy8gICAgICDjgq/jg6rjg4Pjgq/jgZfjgZ/kvY3nva7jgahjYW52YXPkuIrjga7kvY3nva7jga7lpInmj5vjgYzlv4XopoHvvJ9cbiAgICAgICAgLy8g44OX44Os44Kk44Ok44O855m944O76buS44KS44K744OD44OIXG4gICAgICAgIC8vICAgICAg44OV44Op44Kw44Gr44GZ44KL77yfXG4gICAgICAgIC8vIOS4reWkruOBq+eZvem7kjLjgZPjgZrjgaTjgrvjg4Pjg4hcblxuICAgICAgICAvLyDlkITjg5fjg6zjgqTjg6Tjg7zjga7nva7jgYTjgZ/nn7PjgpLkv53mjIHjgZnjgovphY3liJdcbiAgICAgICAgLy9cblxuXG5cbiAgICB9KTtcblxufSgpKTtcblxuLyoqXG4gKiAvLyBUT0RPIOizquWVj1xuICpcbiAqIDEuXG4g44CM5Yik5a6a44GZ44KL44CN44Go44GE44GG6Iux6Kqe44Gv5L2V44KS5L2/44Gj44Gm44G+44GZ44GL77yfXG5cbiBmaW5kPyBqdWRnZT8gZGVjaWRlP1xuXG5cbiAyLlxuIGNocm9tZeOBrmRlduODhOODvOODq+OBp+OCpOODs+OCueOCv+ODs+OCueOBq+WFpeOBo+OBpuOBhOOCi3Tjgajjga/jgarjgpPjga7mhI/lkbPjgIHnlaXvvIjvvJ/vvInjgafjgZnjgYvvvJ/jgqTjg7Pjgrnjgr/jg7PjgrnjgpLjg63jgrDjgavlh7rjgZnjgah044Go44Gq44KL77yfXG4gYm9hcmQuc3RhcnRHYW1l44Gu5pyA5b6M44GnY29uc29sZS5sb2coc2VsZi5zdG9uZVBvc2VzKTvjgZnjgovjgajnorroqo3jgafjgY3jgotcblxuICovXG4iXX0=